// import starlightPlugin from '@astrojs/starlight-tailwind';

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    daisyui: {
        themes: [{
            light: {
                ...require("daisyui/src/theming/themes")["light"],
                primary: "#b51a00",
            },
            dark: {
                ...require("daisyui/src/theming/themes")["dark"],
                primary: "#b51a00",
            },
        }],
    },
    plugins: [require('daisyui')],
}
