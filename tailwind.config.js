/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				'pokemon-solid': 'Pokemon Solid',
				'pokemon-hollow': 'Pokemon Hollow',
				'pokemon-classic': 'Pokemon Classic'
			}
		}
	},
	daisyui: {
		themes: ['emerald']
	},
	plugins: [require('daisyui')]
};
