/*
 * @Author: v_yangyaru
 * @Date: 2024-10-15 09:29:35
 * @LastEditors: wukunling 13022195532@163.com
 * @LastEditTime: 2024-10-25 10:00:01
 * @FilePath: /iflorens-web-v4/src/main.ts
 * @Description:
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "babel-polyfill";
// import { loadPlugins } from "@/plugins/index";
import "ant-design-vue/dist/reset.css";
import "@/assets/css/tailwindcss.css";
import "@iflorens/hui-plus/theme-chalk/style.css";
import "@iflorens/hui-plus/style.css";
import "@/assets/css/index.scss";
import { goPage } from "@/utils/route";

import "vxe-table/lib/style.css";
import "vxe-pc-ui/lib/style.css";
import { VxeGrid } from "vxe-table";
import { VxeUI } from "vxe-table";
import { VxePager, Tooltip } from "vxe-pc-ui";
import esUs from "vxe-table/lib/locale/lang/en-US";
// @ts-ignore
VxeUI.setI18n("en-Us", esUs);
// @ts-ignore
VxeUI.setLanguage("en-Us");
// table分页自定义配置国际化
VxeUI.setConfig({
	i18n: (key: string, args: any) => {
		switch (key) {
		case "vxe.pager.total":
			return `Total ${args} items`;
		case "vxe.pager.pagesize":
			return `${args}/Page`;
		default:
			return "";
		}
	}
});
// @ts-ignore
window.mount = () => {
	const app = createApp(App);
	app.use(VxeGrid);
	app.use(store);
	app.use(router);
	app.use(VxePager);
	app.use(Tooltip);
	app.config.globalProperties.$goPage = goPage;
	// loadPlugins(app);
	app.mount("#app-main");
};

// @ts-ignore
const mount = window.mount;

// 非微前端环境直接渲染
// @ts-ignore
// if (!window.__MICRO_APP_ENVIRONMENT__) {
// 	mount();
// }
mount();
