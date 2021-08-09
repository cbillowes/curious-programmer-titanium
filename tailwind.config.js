module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-script": "var(--primary-script)",
        secondary: "var(--secondary)",
        "secondary-script": "var(--secondary-script)",
        accent: "var(--accent)",
        "accent-script": "var(--accent-script)",

        "accent-secondary": "var(--accent-secondary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
