import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
    ssr: true,
    css: ['@/assets/css/main.css'],
    modules: [],
    app: {
        head: {
            title: 'Jord by Sandra',
            htmlAttrs: {
                lang: 'fr'
            },
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {
                    name: 'description',
                    content:
                        'Jord by Sandra — minimalisme poétique, expériences immersives et design inspiré de la nature.'
                }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap'
                }
            ]
        }
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {}
        }
    },
    nitro: {
        preset: 'vercel-edge'
    },
    typescript: {
        strict: true,
        typeCheck: false
    }
})
