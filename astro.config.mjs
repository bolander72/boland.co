import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [sitemap(), react()],
    output: "static",
    adapter: vercel(),
    server: {
        port: 3000
    },
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': '/src'
            }
        }
    },
    viewTransitions: false,
    experimental: {
        fonts: [{
            provider: fontProviders.google(),
            name: "Figtree",
            cssVariable: "--font-figtree"
        }]
    }
});