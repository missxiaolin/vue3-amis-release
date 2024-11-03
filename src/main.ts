import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
import "babel-polyfill";
import "ant-design-vue/dist/reset.css";
import "@/assets/css/tailwindcss.css";
import "@/assets/css/index.scss";
import { goPage } from "@/utils/route";

const mount = () => {
	const app = createApp(App);
	app.use(store);
	app.use(router);
	app.config.globalProperties.$goPage = goPage;
	app.mount("#app-main");
};

mount();
