/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./views/**/*.ejs", // All EJS files in the views folder
      "./index.js",       // Your main server file
      "./styles.css",     // Include your CSS file for any custom classes
      "./views/partials/**/*.ejs", // Include partials folder
    ],
    theme: {
      extend: {},
    },
    plugins: [require('daisyui')],
  };