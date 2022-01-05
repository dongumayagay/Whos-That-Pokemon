const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      fontFamily: {
        pixel: "pixel",
        pokemon: "pokemon,serif",
      },
    },
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
      },
    },
  },

  plugins: [],
};

module.exports = config;
