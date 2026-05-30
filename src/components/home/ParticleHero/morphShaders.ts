export const morphVertexShader = /* glsl */ `
  uniform float uProgress;
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;

  attribute vec3 aPos0;
  attribute vec3 aPos1;
  attribute float aRnd;

  varying float vProg;
  varying float vRnd;

  void main() {
    // per-particle staggered progress → shapes assemble, not snap
    float delay = aRnd * 0.35;
    float p = smoothstep(delay, delay + 0.65, uProgress);

    vec3 pos = mix(aPos0, aPos1, p);

    // mid-morph turbulence: peaks at p=0.5, zero at both ends
    float burst = sin(p * 3.14159265);
    vec3 dir = normalize(pos + 0.0001);
    pos += dir * burst * (0.25 + aRnd * 0.45);
    pos += vec3(
      sin(uTime * 1.3 + aRnd * 9.0),
      cos(uTime * 0.9 + aRnd * 6.0),
      sin(uTime * 1.1 + aRnd * 4.0)
    ) * burst * 0.16;

    vec4 mv = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = uSize * uPixelRatio * (0.55 + aRnd) * (1.0 / -mv.z);
    gl_Position = projectionMatrix * mv;

    vProg = p;
    vRnd = aRnd;
  }
`;

export const morphFragmentShader = /* glsl */ `
  precision mediump float;

  uniform vec3 uColorA;
  uniform vec3 uColorB;

  varying float vProg;
  varying float vRnd;

  void main() {
    // round, soft-edged point
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d);

    vec3 col = mix(uColorA, uColorB, vProg);
    // subtle per-particle brightness variation
    col *= 0.75 + vRnd * 0.5;

    gl_FragColor = vec4(col, alpha);
  }
`;
