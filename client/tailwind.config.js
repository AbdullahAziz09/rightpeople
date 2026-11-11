/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eef5ff",
          100: "#d9e8ff",
          200: "#bcd7ff",
          300: "#8ebcff",
          400: "#5a97ff",
          500: "#3270ff",
          600: "#1c4df5",
          700: "#153ce0",
          800: "#1832b5",
          900: "#19308f",
          950: "#141d57",
        },
        ink: {
          50: "#f6f7f9",
          100: "#eceef2",
          200: "#d5dae2",
          300: "#b0b9c8",
          400: "#8793a8",
          500: "#69758d",
          600: "#545e74",
          700: "#454d5f",
          800: "#3b4150",
          900: "#1b1f28",
          950: "#101319",
        },
      },
      boxShadow: {
        soft: "0 10px 40px -10px rgba(16, 19, 25, 0.15)",
        card: "0 4px 24px -4px rgba(16, 19, 25, 0.08)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};
