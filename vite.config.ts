import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Betöltjük a környezeti változókat (pl. .env fájlból vagy Vercel env vars-ból)
  const env = loadEnv(mode, (process as any).cwd(), '');

  return {
    plugins: [react()],
    define: {
      // Ez a trükk lehetővé teszi, hogy a kódban a process.env.API_KEY hivatkozás
      // megkapja a VITE_API_KEY értékét a build során.
      // Így a Gemini SDK boldog lesz a process.env használattal böngésző környezetben is.
      'process.env.API_KEY': JSON.stringify(env.VITE_API_KEY),
    },
    server: {
      port: 3000,
    }
  };
});