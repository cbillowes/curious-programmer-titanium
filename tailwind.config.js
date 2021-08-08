module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "main-text": "var(--text-main)",
        "secondary-text": "var(--text-secondary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
