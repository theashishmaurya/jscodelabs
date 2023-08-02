/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // Preserve default heading styles
        "sans-heading": ["ui-sans-serif", "system-ui", "sans-serif"],
        "serif-heading": ["ui-serif", "Georgia", "serif"],
        "mono-heading": ["ui-monospace", "Menlo", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
