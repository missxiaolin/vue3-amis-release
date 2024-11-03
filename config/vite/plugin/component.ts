/*
 * @Author: wukunling 13022195532@163.com
 * @Date: 2024-09-27 13:13:58
 * @LastEditors: wukunling 13022195532@163.com
 * @LastEditTime: 2024-09-27 14:47:24
 * @FilePath: /iflorens-web-v4/config/vite/plugin/component.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @name autoRegistryComponents
 * @description 按需加载，自动引入组件
 */
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export const autoRegistryComponents = () => {
	return Components({
		// resolvers: [ElementPlusResolver()],
		// relative paths to the directory to search for components.
		dirs: ["src/components", "src/views/*/components/", "src/views/todo-approve/"],

		// valid file extensions for components.
		extensions: ["vue"],
		// search for subdirectories
		deep: true,
		// resolvers for custom components
		resolvers: [AntDesignVueResolver({ importStyle: false })],

		// generate `components.d.ts` global declarations,
		// also accepts a path for custom filename
		// dts: false,
		dts: "src/components.d.ts",

		// Allow subdirectories as namespace prefix for components.
		directoryAsNamespace: false,
		// Subdirectory paths for ignoring namespace prefixes
		// works when `directoryAsNamespace: true`
		globalNamespaces: [],

		// auto import for directives
		// default: `true` for Vue 3, `false` for Vue 2
		// Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
		// To install Babel, run: `npm install -D @babel/parser @babel/traverse`
		directives: true,

		// filters for transforming targets
		include: [/\.vue$/, /\.vue\?vue/],
		exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
	});
};
