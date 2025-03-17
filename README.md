# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.



## How install this gym website
npm i
npm i swiper
npm i axios
npm i lucide-react
npm i zustand

npm install tailwindcss @tailwindcss/vite
# Configer file
# file name vite.config.js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
# add this in file name index.css 
@import "tailwindcss";

# Run the site
npm run dev
