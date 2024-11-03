import { createRouter, createWebHistory } from "vue-router";
import { RouterTy } from "@/types/router";

export const constantRoutes: RouterTy = [
	{
		path: "/",
		name: "index",
		component: () => import("@/views/index.vue"),
		meat: {
			hide: false,
			title: "index",
		},
	},
];

/**
 * @description: 通用
 */
export let baseRoutes: RouterTy = [
];

// 合并路由
baseRoutes = baseRoutes.concat(constantRoutes);

const router: any = createRouter({
	history: createWebHistory(""),
	// scrollBehavior: () => ({ top: 0 }),
	routes: baseRoutes,
});

export default router;
