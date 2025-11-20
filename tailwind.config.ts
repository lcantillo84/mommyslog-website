import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'mommy-pink': '#FAC2CC',
        'mommy-rose': '#F2A6B8',
        'mommy-lavender': '#D9D2F2',
      },
    },
  },
  plugins: [],
};
export default config;
