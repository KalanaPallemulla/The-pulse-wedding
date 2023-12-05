import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "mulish-black": ["mulish-black", "sans"],
        "mulish-blackItalic": ["mulish-blackItalic", "sans"],
        "mulish-bold": ["mulish-bold", "sans"],
        "mulish-boldItalic": ["mulish-boldItalic", "sans"],
        "mulish-extraBold": ["mulish-extraBold", "sans"],
        "mulish-extraBoldItalic": ["mulish-extraBoldItalic", "sans"],
        "mulish-lightItalic": ["mulish-lightItalic", "sans"],
        "mulish-medium": ["mulish-medium", "sans"],
        "mulish-mediumItalic": ["mulish-mediumItalic", "sans"],
        "mulish-regular": ["mulish-regular", "sans"],
        "mulish-semiBold": ["mulish-semiBold", "sans"],
        "mulish-semiBoldItalic": ["mulish-semiBoldItalic", "sans"],
      },
      colors: {
        global: {
          black: "#000000",
          white: "#ffffff",
        },
        background_custom: {
          light_green: "#EBFFFE",
          light_white: "#FFFFFF",
          red: "#991b1b",
          dark_green: "#025D7A",
          white_blue: "#EEFEFF",
          button_white: "#F3F3F3"
        },
        fonts: {
          dark_green: "#025D7A",
          semi_dark_green: "#10748A",
          gray: "#3E3D3D",
          light_green_1: "#08B2C3",
          light_green_2: "#2FDCB2",
          new_dark_green: "#10748A",
          dark_ash: "#494848",
          extra_light_green: "#9FD1D3",
          dark_gray: "#545556",
          light_gray: "#686565",
          ligt_green_3: "#007F88",
          light_gray_2: "#8A8787",
          dark_gray_2: "#3C3D3E",
          light_black:"#3A3939"
        },
        border: {
          line_green: "#00A4AD",
          line_dark_green: "#025D7A",
        },
      },
    },
  },
  plugins: [],
}
export default config