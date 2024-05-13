import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
	plugins: [sveltekit()],
	base: isProduction ? '/dailyTools' : ''
});
