/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "Cyan: hsl(186, 34%, 60%)",
        red: "hsl(10, 79%, 65%)",
        "dark-brown": "hsl(25, 47%, 15%)",
        "medium-brown": "hsl(28, 10%, 53%)",
        cream: "hsl(27, 66%, 92%)",
        "custom-orange": "hsl(33, 100%, 98%)",
      },
    },
  },
  plugins: [],
};
