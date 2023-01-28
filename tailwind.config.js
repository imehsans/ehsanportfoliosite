/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		fontFamily: {
			sans: ['ui-sans-serif', 'system-ui'],
			serif: ['ui-serif', 'Georgia'],
			mono: ['ui-monospace', 'SFMono-Regular'],
			display: ['Oswald'],
			body: ['"Open Sans"'],
			rubik: ['Rubik Distressed', 'cursive'],
			anton: ['Anton'],
		},
		extend: {
			colors: {
				primary: '#FF7F50',
				secondary: '#8080ff',
				light: '#8695A4',
				dark: '#36013f',
			},
		},
	},
	plugins: [],
}
