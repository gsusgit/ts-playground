// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
