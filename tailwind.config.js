/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          500: '#2C71F6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#F73B3B',
          600: '#dc2626',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        text: {
          primary: '#202020',
          secondary: '#898989',
        }
      },
      spacing: {
        '18': '4.5rem', // 72px
        '38': '9.5rem', // 152px
      },
      height: {
        '38': '38px',
      },
      borderRadius: {
        '6': '6px',
      }
    },
  },
  plugins: [],
}
