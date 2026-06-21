import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0F0F1A',
          secondary: '#1A1A2E',
          surface: '#1E1E32',
        },
        gold: '#D4A853',
        text: {
          primary: '#F5F5F7',
          secondary: '#A0A0B8',
          tertiary: '#6B6B82',
        },
        border: {
          DEFAULT: '#2E2E44',
          strong: '#3D3D58',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#3B82F6',
        tier: {
          blue: '#3B82F6',
          green: '#22C55E',
          purple: '#A855F7',
          gold: '#F59E0B',
        },
      },
    },
  },
  plugins: [],
}

export default config
