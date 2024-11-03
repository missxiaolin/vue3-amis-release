import type { Plugin } from "vite";
// 开启 ref 语法糖 需要加.value
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { autoRegistryComponents } from "./component";
import { AutoImportDeps } from "./autoImport";
import { configVisualizerConfig } from "./visualizer";
import { configCompressPlugin } from "./compress";
import { setupExtend } from "./setupExtend";
import { cdnhtml } from "./cdnHtml";
import { legacyConfig } from "./legacy";
import { lazyImport, VxeResolver } from "vite-plugin-lazy-import";
// import { httpsSsl } from "./basicSsl";
// import { svgBuilder } from "./svgBuilder";

export function createVitePlugins(isBuild: boolean, mode: string) {
	const vitePlugins: (Plugin | Plugin[])[] = [
		// https 证书
		// httpsSsl(),
		// vue支持
		vue({
			// refTransform: true // 开启ref转换
			template: {
				compilerOptions: {
					// 解决 Failed to resolve component: micro-app
					isCustomElement: tag => /^micro-app/.test(tag),
				},
			},
		}),
		// JSX支持
		vueJsx(),
		// 自动按需引入组件
		autoRegistryComponents(),
		// 自动按需引入依赖
		AutoImportDeps(),
		//
		setupExtend(),
		cdnhtml(mode),
		lazyImport({
			resolvers: [
				VxeResolver({
					libraryName: "vxe-table",
				}),
				VxeResolver({
					libraryName: "vxe-pc-ui",
				}),
			],
		}),
		// svgBuilder("./src/assets/svg/"),
	];

	// rollup-plugin-gzip
	isBuild && vitePlugins.push(configCompressPlugin());
	// 低版本浏览器兼容
	isBuild && vitePlugins.push(legacyConfig());

	// rollup-plugin-visualizer
	vitePlugins.push(configVisualizerConfig());

	return vitePlugins;
}
