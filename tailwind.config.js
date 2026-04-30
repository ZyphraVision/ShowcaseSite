/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#08080f',
        surface: '#111118',
        'surface-2': '#1a1a24',
        accent: '#7c6dfa',
        'accent-glow': 'rgba(124, 109, 250, 0.3)',
        'text-primary': '#f0f0f8',
        'text-secondary': '#8888a8',
        border: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        'space-1': '8px',
        'space-2': '16px',
        'space-3': '24px',
        'space-4': '32px',
        'space-6': '48px',
        'space-8': '64px',
        'space-12': '96px',
        'space-16': '128px',
      },
      boxShadow: {
        glow: '0 0 24px rgba(124,109,250,0.4)',
        'glow-lg': '0 0 48px rgba(124,109,250,0.5)',
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
};