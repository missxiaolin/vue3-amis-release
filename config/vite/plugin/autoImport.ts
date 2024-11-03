/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入依赖
 */
import AutoImport from "unplugin-auto-import/vite";
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
export const AutoImportDeps = () =>
	AutoImport({
		// resolvers: [ElementPlusResolver()],
		imports: ["vue", "vue-router", "@vueuse/core", "pinia"],
		ignore: ["h"],
		dts: "src/auto-imports.d.ts",
	});
