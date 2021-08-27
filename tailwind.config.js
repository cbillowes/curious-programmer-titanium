module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        mono: ["Courier Prime", "mono"],
      },
      borderColor: {
        "search-neutral-1": "var(--search-neutral-1)",
        "search-neutral-2": "var(--search-neutral-2)",

        "color-1": "var(--color-1)",
        "color-1-inverse": "var(--color-1-script)",

        "color-2": "var(--color-2)",
        "color-2-inverse": "var(--color-2-script)",

        "color-3": "var(--color-3)",
        "color-3-inverse": "var(--color-3-script)",
      },
      colors: {
        "welcome-headings": "var(--welcome-headings)",
        "search-neutral-1": "var(--search-neutral-1)",
        "search-neutral-2": "var(--search-neutral-2)",

        neutral: "var(--neutral)",

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

        twitter: "#1DA1F2",
        stackoverflow: "#c9510c",
        github: "#000000",
        linkedin: "#2867B2",
      },
      placeholder: {
        "search-neutral-1": "var(--search-neutral-1)",
        "search-neutral-2": "var(--search-neutral-2)",
        neutral: "var(--neutral)",
        default: "var(--default)",
        inverse: "var(--inverse)",
        "color-1": "var(--color-1)",
        "color-2": "var(--color-2)",
        "color-3": "var(--color-3)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
