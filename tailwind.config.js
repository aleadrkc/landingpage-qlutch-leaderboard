/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#e6c84c",
          foreground: "#3d3d3d",
        },
        muted: {
          DEFAULT: "#f4f4f5",
          foreground: "#64748b",
        },
        card: {
          DEFAULT: "#ffffff",
          foreground: "#1a1a1a",
        },
        border: "#e4e4e7",
      },
      fontFamily: {
        sans: ["Inter", "Inter Fallback", "sans-serif"],
      },
    },
  },
  plugins: [],
};
