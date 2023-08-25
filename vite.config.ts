import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // or whatever React plugin you're using
import viteSass from 'vite-plugin-sass';

export default defineConfig({
  plugins: [
    react(),
    viteSass({
      additionalData: `@import "@/styles/variables.scss";`
    }),
    // ... any other plugins you might have
  ],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  // ... the rest of your Vite config
});
