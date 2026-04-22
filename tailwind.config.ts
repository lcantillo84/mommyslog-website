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
        'ml-teal': '#5BA89F',
        'ml-cream': '#FFF9F4',
        'ml-card': '#FFFCF9',
        'ml-text': '#252220',
        'ml-secondary': '#7A7470',
        'ml-alert': '#C85A5A',
        'ml-blue': '#B8D4E0',
        'ml-sand': '#EED8B4',
        'ml-caramel': '#C4A07A',
      },
    },
  },
  plugins: [],
};
export default config;
