<template>
	<div class="content-base" @click="go">跳转到UI组件测试</div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";

export default {
	setup() {
		const router = useRouter();

		const go = () => {
			router.push({
				path: "/themedemo",
			});
		};

		return {
			go,
		};
	},
};
</script>

<style lang="scss" scoped>
.content-base {
	width: 100%;
	height: auto;
	overflow: hidden;
}
</style>
