/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			backgroundColor: {
				main: 'var(--bg-main)'
			},
			colors: {
				primary: 'var(--text-primary)'
			}
		}
	},
	plugins: []
};
