module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  presets: [require("windy-radix-palette")],
  darkMode: "class",
};
