/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#131E3A",
				secondary: "#5D6A85",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			boxShadow: {
				serve: "0px 0px 16px 0px rgba(0, 17, 94, 0.18)",
				userCard: "0px 0px 8px 0px rgba(0, 17, 94, 0.04)",
			},
		},
	},
	plugins: [],
};
