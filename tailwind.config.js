/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        // Customizing the default breakpoints
        sm: "480px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
      },
    },
  },
  plugins: [],
};
