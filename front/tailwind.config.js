/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./css/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Couleurs personnalisées
      colors: {
        primary: "#4F46E5", // violet principal
        secondary: "#F59E0B", // orange secondaire
        accent: "#10B981", // vert accent
        neutral: "#F3F4F6", // gris clair
        dark: "#111827", // gris foncé
        info: "#3ABFF8",
        success: "#36D399",
        warning: "#FBBD23",
        error: "#F87272",
      },

      // Polices
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Merriweather", "serif"],
        mono: ["Fira Code", "monospace"],
      },

      // Tailles de texte globales
      fontSize: {
        h1: ["3rem", { lineHeight: "1.2" }],
        h2: ["2.25rem", { lineHeight: "1.3" }],
        h3: ["1.875rem", { lineHeight: "1.4" }],
        base: ["1rem", { lineHeight: "1.6" }],
      },

      // Spacing personnalisés
      spacing: {
        128: "32rem",
        144: "36rem",
      },

      // Border-radius
      borderRadius: {
        xl: "1.5rem",
        "2xl": "2rem",
      },
    },
  },

  // Plugins
  plugins: [require("daisyui")],

  // Thèmes daisyUI
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#4F46E5",
          secondary: "#F59E0B",
          accent: "#10b981",
          neutral: "#F3F4F6",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      "dark",
    ],
  },
};
