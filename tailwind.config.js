/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			sans: ['DynaPuff', 'sans-serif'],
		},
		container: false,
		screens: {
			sm: { max: '480px' },
		},
		extend: {
			transitionProperty: {
				flex: 'flex',
			},
			flexGrow: {
				5: 5,
				0.5: 0.5,
			},
		},
	},
	plugins: [],
};
