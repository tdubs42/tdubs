import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	daisyui: {
		themes: [
			"luxury",
			"nord",
			// {
			// 	lightTheme: {
			// 		"primary": "#f4a261",
			// 		"secondary": "#2a9d8f",
			// 		"accent": "#e76f51",
			// 		"neutral": "#264653",
			// 		"base-100": "#f8eac7",
			// 	},
			// 	darkTheme: {
			// 		"primary": "#2A9D8F",
			// 		"secondary": "#E76F51",
			// 		"accent": "#F4A261",
			// 		"neutral": "#E9C46A",
			// 		"base-100": "#264653",
			// 	},
			// },
		],
	},
	darkMode: 'class',
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
export default config;
