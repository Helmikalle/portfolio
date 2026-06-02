/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#112033",
        muted: "#5b6b80",
        line: "#d7e1ec",
        cloud: "#f5f8fc",
        "cloud-strong": "#eef4fa",
        accent: {
          DEFAULT: "#157f67",
          strong: "#0f6652",
          soft: "rgba(21, 127, 103, 0.1)"
        }
      },
      boxShadow: {
        panel: "0 18px 42px rgba(17, 32, 51, 0.08)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
