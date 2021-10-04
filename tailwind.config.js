const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            cyan: colors.cyan,
            grey: colors.gray,
        },
    },
    variants: {
        extend: {
            margin: ["group-hover", "group-focus"],
        },
    },
    plugins: [],
};
