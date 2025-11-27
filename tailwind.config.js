/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#800B28',
                charcoal: '#3A3A3A',
                sand: '#EFE6D3',
                azure: '#285CB8',
                deepIndigo: '#4B0082',
                electric: '#3F00FF'
            },
            fontFamily: {
                display: ['"Brush Script MT"', 'cursive'],
                serif: ['"Lora"', 'serif']
            },
            boxShadow: {
                soft: '0 20px 50px rgba(0, 0, 0, 0.12)'
            }
        }
    },
    plugins: []
}