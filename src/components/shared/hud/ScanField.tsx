'use client';

/**
 * Global perception field — the machine-vision backdrop behind every page.
 * Fixed, pointer-transparent: a tinted depth gradient, technical grid,
 * sensor noise, and a slow scan-line sweep. Mounted once in LayoutShell.
 */
export default function ScanField() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* depth gradient — evokes a point-cloud / spatial map.
          NO solid fallback color — html provides the base bg, so this layer
          must stay transparent enough for the particle canvas behind to show. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 90% at 50% -10%, oklch(0.20 0.05 285 / 0.30), transparent 55%),' +
            'radial-gradient(90% 70% at 85% 110%, oklch(0.22 0.06 200 / 0.18), transparent 60%)',
        }}
      />
      {/* technical grid */}
      <div className="absolute inset-0 hud-grid opacity-40" />
      {/* sensor noise */}
      <div className="absolute inset-0 hud-noise opacity-[0.04] mix-blend-screen" />
      {/* scan-line sweep */}
      <div
        className="absolute left-0 right-0 h-px animate-scan-sweep"
        style={{
          top: 0,
          background:
            'linear-gradient(90deg, transparent, oklch(0.84 0.12 200 / 0.55) 50%, transparent)',
          boxShadow: '0 0 24px 2px oklch(0.84 0.12 200 / 0.35)',
        }}
      />
      {/* vignette — subtle edge falloff so particles stay readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(130% 100% at 50% 50%, transparent 65%, oklch(0.06 0.02 280 / 0.45) 100%)',
        }}
      />
    </div>
  );
}
