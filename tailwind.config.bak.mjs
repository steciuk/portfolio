/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
    colors: {
      text: "rgb(var(--text-color) / <alpha-value>)",
      background: "rgb(var(--background-color) / <alpha-value>)",
      primary: "rgb(var(--primary-color) / <alpha-value>)",
      secondary: "rgb(var(--secondary-color) / <alpha-value>)",
      accent: "rgb(var(--accent-color) / <alpha-value>)",
    }
  },
	plugins: [],
}
