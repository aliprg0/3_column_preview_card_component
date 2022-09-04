/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "bright-orange": "hsl(31, 77%, 52%)",
        "dark-cyan": "hsl(184, 100%, 22%)",
        "very-dark-cyan": "hsl(179, 100%, 13%)",
      },
    },
  },
  plugins: [],
};
