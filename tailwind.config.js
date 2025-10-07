/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': ['Vazir', 'sans-serif'],
        'iran-sans': ['IRANSans', 'sans-serif'],
      },
      colors: {
        glass: {
          50: 'rgba(255, 255, 255, 0.05)',
          100: 'rgba(255, 255, 255, 0.1)',
          200: 'rgba(255, 255, 255, 0.2)',
          300: 'rgba(255, 255, 255, 0.3)',
          400: 'rgba(255, 255, 255, 0.4)',
          500: 'rgba(255, 255, 255, 0.5)',
        },
        liquid: {
          primary: '#0066CC',
          secondary: '#004499',
          accent: '#00AAFF',
          light: '#E6F3FF',
        },
        trust: {
          verified: '#22C55E',
          warning: '#F59E0B',
          danger: '#EF4444',
        }
      },
      backdropBlur: {
        xs: '2px',
        '4xl': '72px',
      },
      boxShadow: {
        'liquid': '0 8px 32px rgba(0, 102, 204, 0.1)',
        'glass': '0 8px 32px rgba(255, 255, 255, 0.1)',
        'inner-glass': 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      },
      animation: {
        'liquid-flow': 'liquidFlow 3s ease-in-out infinite',
        'glass-shimmer': 'glassShimmer 2s ease-in-out infinite',
        'trust-pulse': 'trustPulse 2s ease-in-out infinite',
      },
      keyframes: {
        liquidFlow: {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-10px) scale(1.02)' }
        },
        glassShimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        trustPulse: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.8, transform: 'scale(1.05)' }
        }
      },
      backgroundImage: {
        'liquid-gradient': 'linear-gradient(135deg, rgba(0,102,204,0.1) 0%, rgba(0,170,255,0.1) 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}