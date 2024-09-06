import presetWind from '@unocss/preset-wind';
import { defineConfig } from 'unocss';

export default defineConfig({
	content: {
		filesystem: ['./src/**/*.{html,js,ts,jsx,tsx,vue}'],
	},
	presets: [presetWind()],
});
