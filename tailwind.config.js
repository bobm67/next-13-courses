/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
		'headwind.classRegex': {
			javascriptreact:
				'(?:\\bclassName\\s*=\\s*[\\"\\\']([_a-zA-Z0-9\\s\\-\\:\\/]+)[\\"\\\'])|(?:\\btw\\s*`([_a-zA-Z0-9\\s\\-\\:\\/]*)`)',
			html: '\\bclass\\s*=\\s*[\\"\\\']([_a-zA-Z0-9\\s\\-\\:\\/]+)[\\"\\\']',
		},
	},
	plugins: [require('tailwindcss-debug-screens')],
}
