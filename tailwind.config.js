/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/**/*.{html,ts,svelte}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {
      colors: {
        text: {
          primary: "var(--color-text-0)",
          secondary: "var(--color-text-1)",
          tertiary: "var(--color-text-2)",
        },
        bg: {
          primary: "var(--color-bg-0)",
          secondary: "var(--color-bg-1)",
          tertiary: "var(--color-bg-2)",
        },
        content: {
          primary: "var(--color-content-0)",
          secondary: "var(--color-content-1)",
          tertiary: "var(--color-content-2)",
        }
      },
      animation: {
        'spin-once': 'spin 500ms ease-in-out forwards',
        
      }      
    },
  },
  plugins: [require("daisyui")],
}

