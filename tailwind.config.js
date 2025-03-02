/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        trust: '#1e3a8a', // deep blue for trust and professionalism
        security: '#22c55e', // green for security and success
        urgency: '#dc2626', // red for urgency and calls-to-action
      },
    },
  },
  plugins: [],
}

