import { type App } from "vue";
import { loadAntPlus } from "./ant-desine";

export function loadPlugins(app: App) {
	loadAntPlus(app);
}
