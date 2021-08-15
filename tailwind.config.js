module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        default: "var(--default)",
        "default-script": "var(--default-script)",

        inverse: "var(--inverse)",
        "inverse-script": "var(--inverse-script)",

        "color-1": "var(--color-1)",
        "color-1-script": "var(--color-1-script)",

        "color-2": "var(--color-2)",
        "color-2-script": "var(--color-2-script)",

        "color-3": "var(--color-3)",
        "color-3-script": "var(--color-3-script)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
