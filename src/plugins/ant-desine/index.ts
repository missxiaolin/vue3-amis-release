import { type App } from "vue";
import Antd from "ant-design-vue";

export function loadAntPlus(app: App) {
	/** ant 组件完整引入 */
	app.use(Antd);
}
