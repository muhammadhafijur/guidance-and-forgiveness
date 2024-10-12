/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'finger-paint': ['Finger Paint', 'sans-serif'],
				'noto-sans-bengali': ['Noto Sans Bengali', 'sans-serif']
			  },
		},
	},
	plugins: [],
}
