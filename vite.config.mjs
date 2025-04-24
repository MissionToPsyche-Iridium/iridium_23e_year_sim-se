import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

export default defineConfig({
  base: '/iridium_23e_year_sim-se/', 
  // base: '/hosttest/', 

  plugins: [
    wasm(),
    topLevelAwait()
  ],
  optimizeDeps: {
    include: ['three']
  },
  build: {
    outDir: 'docs',
    assetsDir: 'assets',
    emptyOutDir: true,
    chunkSizeWarningLimit: 1500, 
    sourcemap: true
  }
});
