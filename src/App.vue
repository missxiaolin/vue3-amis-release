<template>
	<div class="content-base">
		<AConfigProvider :locale="enGb" :theme="themeData" :getPopupContainer="getPopupContainer">
			<template v-if="routeWhite.indexOf(path) > -1">
				<router-view></router-view>
			</template>
			<template v-else-if="!isMockLayouts">
				<layouts />
			</template>
			<template v-else>
				<router-view></router-view>
			</template>
		</AConfigProvider>
	</div>
</template>

<script lang="ts">
import { ref, defineAsyncComponent, watch, onMounted, reactive } from "vue";
import enGb from "ant-design-vue/locale/en_GB";
import { useRouter, _RouteLocationBase } from "vue-router";
import { theme } from "@/theme/index";
export default {
	components: {
		layouts: defineAsyncComponent(() => import("./layouts/index.vue")),
	},
	setup() {
		let themeData = reactive(theme);
		// 是否本地环境
		let isMockLayouts = ref(false);
		const router = useRouter();
		let path: any = ref("");

		isMockLayouts.value = false;

		const routeWhite = ref(["/login", "/"]);


		const getPopupContainer:any = (el: any, dialogContext: { getDialogWrap: () => any; }) => {
			if (dialogContext) {
			return dialogContext.getDialogWrap();
			}
			return document.body;

      	};

		onMounted(() => {
			// @ts-ignore
			const isMicro: any = window.__MICRO_APP_ENVIRONMENT__;

			if (isMicro === true) {
				isMockLayouts.value = true;
			}
		});

		// 监听当前路由
		watch(
			() => router.currentRoute.value,
			(newValue: _RouteLocationBase) => {
				path.value = newValue.path;
			},
			{ immediate: true },
		);

		return {
			enGb,
			isMockLayouts,
			routeWhite,
			getPopupContainer,
			path,
			themeData,
		};
	},
};
</script>

<style lang="scss">
@import url("./assets/css/font.scss");
@import url("./assets/css/global.scss");
</style>
