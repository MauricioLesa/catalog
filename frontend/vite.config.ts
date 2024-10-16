import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [React()],
    server: {
        port: 5173,
        host: true,
        watch: {
           usePolling: true,
        },
    }
    
})