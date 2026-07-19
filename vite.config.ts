import{defineConfig}from'vitest/config';import react from'@vitejs/plugin-react';
import { cloudflare } from "@cloudflare/vite-plugin";
export default defineConfig({base:'/aktru-verified-ai-identity-builder/',plugins:[react(), cloudflare()],test:{environment:'jsdom'}});