/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入依赖
 */
import html from "vite-plugin-html";
import { loadEnv } from "vite";
const timestamp = new Date().getTime();

export const cdnhtml = (mode: string) => {
	const cdnEnv: string = loadEnv(mode, process.cwd()).VITE_APP_CDN_ENV;
	return html({
		minify: true,
		inject: {
			injectData: {
				title: "vite with vue3",
				// cdn 配置
				cdn: {
					css: [],
					js: ["/assets/js/lib/axios/axios.min.js"],
				},
				// BASE_URL: BASE_URL,
			},
		},
	});
};
