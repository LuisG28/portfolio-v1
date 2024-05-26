/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary' : '#0B51FF',
				'secondary' : '#12DEFF',
				'tertiary' : '#55FF9E',
				'base' : '#020921',
			},
		},
	},
	plugins: [],
}
