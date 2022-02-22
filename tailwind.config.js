module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.css",
  ],
  theme: {
    extend: {
      fontFamily: {
        black: ["Lovely Black"],
        line: ["Lovely Line Light"],
        lineBold: ["Lovely Line Bold"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
