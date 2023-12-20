import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [
    require('@tailwindcss/typography'),
    nextui({
      themes: {
        light: {
          colors: {
            background: "#007bff", // or DEFAULT
            foreground: "#11181C", // or 50 to 900 DEFAULT
            primary: {
              50: "#000000",   // 50 lightness
              100: "#080808",  // 100 lightness
              200: "#101010",  // 200 lightness
              300: "#191919",  // 300 lightness
              400: "#212121",  // 400 lightness
              500: "#171717",  // 500 lightness (base color)
              600: "#292929",  // 600 lightness
              700: "#313131",  // 700 lightness
              800: "#393939",  // 800 lightness
              900: "#424242",  // 900 lightness
              // 950: "#494949",  // 950 lightness
              foreground: "#FFFFFF",
              DEFAULT: "#000000",
            },
            // ... rest of the colors
          },
        },
      }
    })
  ],
}
export default config
