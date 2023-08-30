import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        orange:"#f44336",
        grey:"rgba(32,33,36,.1)",
        dark:"#202124",
        light:"#fdfdfd",
        subtle:"#e9e9e9"
      },
      textColor:{
        dark:"#202124",
        white:"#ffffff"
      },
      borderColor:{
        dark:"#202124",
      }
    },
  },
  plugins: [],
}
export default config
