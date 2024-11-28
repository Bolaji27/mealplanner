import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        redColor: "#AF0B0B",
        blueBg : "#7A89A0",
        blueText : "#4F5877",
        darkenBlue : "#535252"
      },
      fontFamily: {
        frank: "var(--font-frank)",
        gravitas : "var(--font-gravitas)",
        hammersmith: "var(--font-hammersmith)",
        fan: "var(--font-fan)",
        inria: "var(--font-inria)",
        lowan: ['Lowan Old Style', 'serif'],
        gilda: "var(--font-gilda)",
        courier: "var(--font-courier)"
      }
    },
  },
  plugins: [],
} satisfies Config;
