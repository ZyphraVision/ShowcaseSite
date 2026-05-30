import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { MeshSurfaceSampler } from 'three/examples/jsm/math/MeshSurfaceSampler.js';

/**
 * Point-cloud builders for the morph hero. Every builder returns a
 * Float32Array(count * 3) normalized so the shape's farthest point sits at
 * `targetRadius` from origin — guaranteeing all morph targets share a scale.
 */

/** Center on bounding-box midpoint and scale to a common radius (in place). */
export function normalizePoints(arr: Float32Array, targetRadius = 1.2): Float32Array {
  const n = arr.length / 3;
  let minX = Infinity, minY = Infinity, minZ = Infinity;
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
  for (let i = 0; i < n; i++) {
    const x = arr[i * 3], y = arr[i * 3 + 1], z = arr[i * 3 + 2];
    if (x < minX) minX = x; if (y < minY) minY = y; if (z < minZ) minZ = z;
    if (x > maxX) maxX = x; if (y > maxY) maxY = y; if (z > maxZ) maxZ = z;
  }
  const cx = (minX + maxX) / 2, cy = (minY + maxY) / 2, cz = (minZ + maxZ) / 2;
  let maxR = 0;
  for (let i = 0; i < n; i++) {
    const dx = arr[i * 3] - cx, dy = arr[i * 3 + 1] - cy, dz = arr[i * 3 + 2] - cz;
    const r = Math.sqrt(dx * dx + dy * dy + dz * dz);
    if (r > maxR) maxR = r;
  }
  const s = maxR > 0 ? targetRadius / maxR : 1;
  for (let i = 0; i < n; i++) {
    arr[i * 3] = (arr[i * 3] - cx) * s;
    arr[i * 3 + 1] = (arr[i * 3 + 1] - cy) * s;
    arr[i * 3 + 2] = (arr[i * 3 + 2] - cz) * s;
  }
  return arr;
}

/** Sample N area-weighted surface points from every mesh under `root`. */
export function sampleGeometry(
  root: THREE.Object3D,
  count: number,
  targetRadius = 1.2,
): Float32Array {
  root.updateWorldMatrix(true, true);

  const geoms: THREE.BufferGeometry[] = [];
  root.traverse((obj) => {
    const mesh = obj as THREE.Mesh;
    if (!mesh.isMesh || !mesh.geometry) return;
    const src = mesh.geometry;
    const posAttr = src.getAttribute('position');
    if (!posAttr) return;
    const clean = new THREE.BufferGeometry();
    clean.setAttribute('position', posAttr.clone());
    if (src.index) clean.setIndex(src.index.clone());
    clean.applyMatrix4(mesh.matrixWorld);
    geoms.push(clean.index ? clean.toNonIndexed() : clean);
  });

  if (geoms.length === 0) return new Float32Array(count * 3);

  const merged = geoms.length === 1 ? geoms[0] : (mergeGeometries(geoms, false) ?? geoms[0]);
  const sampler = new MeshSurfaceSampler(new THREE.Mesh(merged)).build();

  const out = new Float32Array(count * 3);
  const p = new THREE.Vector3();
  for (let i = 0; i < count; i++) {
    sampler.sample(p);
    out[i * 3] = p.x;
    out[i * 3 + 1] = p.y;
    out[i * 3 + 2] = p.z;
  }
  return normalizePoints(out, targetRadius);
}

/** Eyeball: fibonacci sphere, slightly flattened on the front (+z) for an iris plane. */
export function fibonacciEye(count: number, targetRadius = 1.2): Float32Array {
  const out = new Float32Array(count * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // 1 → -1
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = golden * i;
    let x = Math.cos(theta) * r;
    let z = Math.sin(theta) * r;
    // pull the front cap slightly inward → reads as an iris/cornea plane
    if (z > 0.55) z = 0.55 + (z - 0.55) * 0.45;
    out[i * 3] = x;
    out[i * 3 + 1] = y;
    out[i * 3 + 2] = z;
  }
  return normalizePoints(out, targetRadius);
}

/**
 * Procedural ear (fallback when no CC0 GLB is sourced): a volumetric pinna —
 * curled outer helix (a tube, not a line), inner antihelix ridge, a recessed
 * concha bowl, and an earlobe. Has real depth so it reads from any angle.
 */
export function proceduralEar(count: number, targetRadius = 1.2): Float32Array {
  const out = new Float32Array(count * 3);
  const TWO = Math.PI * 2;
  for (let i = 0; i < count; i++) {
    const r = Math.random();
    let x = 0, y = 0, z = 0;

    if (r < 0.42) {
      // outer helix rim — a C-curl with a tube cross-section for volume
      const a = 0.25 * Math.PI + Math.random() * (1.55 * Math.PI);
      const R = 0.82 - 0.1 * Math.sin(a);
      const cx = Math.cos(a) * R - 0.05;
      const cy = Math.sin(a) * R * 1.08;
      const ta = Math.random() * TWO;
      const tr = 0.14 * Math.sqrt(Math.random());
      x = cx + Math.cos(a) * Math.cos(ta) * tr;
      y = cy + Math.sin(a) * Math.cos(ta) * tr;
      z = 0.18 + 0.2 * Math.cos(a * 0.5) + Math.sin(ta) * tr * 1.4;
    } else if (r < 0.66) {
      // antihelix — inner ridge
      const a = 0.45 * Math.PI + Math.random() * (1.1 * Math.PI);
      const R = 0.42;
      x = Math.cos(a) * R - 0.02 + (Math.random() - 0.5) * 0.06;
      y = Math.sin(a) * R * 1.05 + (Math.random() - 0.5) * 0.06;
      z = 0.05 + 0.12 * Math.cos(a) + (Math.random() - 0.5) * 0.06;
    } else if (r < 0.9) {
      // concha — recessed bowl (concave toward -z)
      const ang = Math.random() * TWO;
      const rho = Math.sqrt(Math.random()) * 0.34;
      x = Math.cos(ang) * rho + 0.04;
      y = Math.sin(ang) * rho - 0.05;
      z = -0.28 * (1 - (rho / 0.34) ** 2);
    } else {
      // earlobe — cluster at the bottom
      x = (Math.random() - 0.5) * 0.26 - 0.02;
      y = -0.92 + (Math.random() - 0.5) * 0.22;
      z = (Math.random() - 0.5) * 0.14;
    }

    out[i * 3] = x;
    out[i * 3 + 1] = y;
    out[i * 3 + 2] = z;
  }
  return normalizePoints(out, targetRadius);
}

/** Per-particle random attribute for delay + size variation. */
export function makeRandoms(count: number): Float32Array {
  const out = new Float32Array(count);
  for (let i = 0; i < count; i++) out[i] = Math.random();
  return out;
}
