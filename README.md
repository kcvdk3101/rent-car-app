<p align="center" >
    <a href="https://reactjs.org/" target="blank">
        <img src="https://nordiccoder.com/app/uploads/2019/07/14-react.png" height="200" alt="React Logo" />
    </a>
</p>

# Rental Car App (Clone App)

## Description
> ### This is clone app for me to code full MERN Website using React TypeScript, Tailwind, GraphQL and Docker.

## 1. Environment
- NodeJS
- Docker
## 2. Technical
### 2.1 Frontend
- React TypeScript
- Styled components
- Tailwind css
### 2.2 Backend
- NestJS
- GraphQL
- TypeORM
- Apollo
## 4. Tailwind CSS and Twin
### 4.1 Install
```bash
   $ yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest
   $ yarn add @craco/craco
   $ yarn add twin.macro
```
### 4.2 Configuration
Create a `craco.config.js` at the root of our project
```js
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

Create a `tailwind.config.js` at the root of our project
```js
// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
```

## 5. CSS Property Structure
> **Tutorial Link** : https://css-tricks.compoll-results-how-do-you-order-your-css-properties/

## 6. Customize Markdown (Markdown to PDF file)
> **Tutorial Link** : https://www.youtube.com/watch?v=wBISkGjwVyo

## Other dependencies installed
- styled-components
- react-burger-menu

