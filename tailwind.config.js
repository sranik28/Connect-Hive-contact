/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "dashboard-md": "280px auto",
      },
      colors: {
        'Primary': '#645bff',
      },
      spacing: {
        "dashboard-md": "280px",
        "dashboard-body": "calc(100% - 280px)",
      },
    },
  },
  daisyui: {
    themes: ["light", "dark"],
  },
  plugins: [require("daisyui")],
};
