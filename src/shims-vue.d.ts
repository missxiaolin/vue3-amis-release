/* eslint-disable */

/// <reference types="vite/client" />
/*生命模块类型*/
declare module "*.vue" {
	import { DefineComponent } from "vue";
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>;

	export default component;
}
declare module "*.vue" {
	import { ComponentOptions } from "vue";
	const componentOptions: ComponentOptions;
	export default componentOptions;
}
declare module "./*";
declare module "@/*";
declare module "@/hooks";
declare module "*";
declare interface Window {
	windPost: any;
	windGet: any;
}

declare const cdnChitu: any;
