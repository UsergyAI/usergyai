import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Enable code splitting for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu'],
          utils: ['clsx', 'tailwind-merge', 'class-variance-authority'],
          lucide: ['lucide-react']
        }
      }
    },
    // Enable aggressive minification
    minify: 'esbuild',
    // Disable sourcemaps in production for smaller bundles
    sourcemap: false,
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Optimize assets - inline smaller assets
    assetsInlineLimit: 8192,
    // Enable compression
    reportCompressedSize: false,
    // Target modern browsers for better optimization
    target: 'es2020'
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  esbuild: {
    // Remove console logs in production
    ...(mode === 'production' && {
      drop: ['console', 'debugger']
    })
  }
}));
