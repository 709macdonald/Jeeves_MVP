/**
 * PostCSS configuration for Tailwind CSS v4.
 * Uses the new @tailwindcss/postcss plugin for processing.
 */
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [tailwindcss(), autoprefixer()],
}
