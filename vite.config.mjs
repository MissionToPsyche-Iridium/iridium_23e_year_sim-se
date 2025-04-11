import { defineConfig } from "vite";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { createHtmlPlugin } from "vite-plugin-html";

export default defineConfig({
    // Base URL Configuration - matches GitHub Pages repository name
    base: '/iridium_23e_year_sim-se/',
    
    plugins: [
        wasm(),
        topLevelAwait(),
        viteStaticCopy({ 
            targets: [
                { src: "res", dest: "" },  
                { src: "css", dest: "" },  
                { src: "img", dest: "" }   
            ]
        }),
        // Preloading Critical Assets
        createHtmlPlugin({
            minify: true,
            inject: {
                data: {
                    preloadLinks: [
                        // Preload critical CSS
                        { rel: 'preload', href: '/css/style.css', as: 'style' },
                        // Preload critical JavaScript modules
                        { rel: 'modulepreload', href: '/assets/index-JOHF8NKl.js' }
                    ]
                }
            }
        })
    ],
    optimizeDeps: {
        include: ["three"]
    },
    build: {
        // Enable Build Caching
        cache: true,
        cacheDir: 'node_modules/.vite',
        
        // Source Maps Strategy
        sourcemap: 'hidden',
        
        // Chunk Size Optimization
        chunkSizeWarningLimit: 1000, // in kB, default is 500
        rollupOptions: {
            output: {
                manualChunks: {
                    // Group Three.js and related packages
                    'vendor-three': ['three'],
                    // Group other large dependencies
                    'vendor-ui': ['jquery', 'gsap'],
                    // Group WASM dependencies
                    'vendor-wasm': ['@dimforge/rapier3d']
                }
            }
        },
        
        assetsDir: "assets",
        outDir: "dist"  // Changed back to "dist" to avoid conflicts
    }
});
