<template>
	<div class="v3-layouts-header reverse-darkmode">
		<div class="v3-layouts-left">
			<MenuFoldOutlined :style="{ fontSize: '25px', color: '#fff' }" @click="collapseMenu" />
			<fl-icon class="iflorens-a-Florens-Logo" :style="{ color: '#FDF47D' }"></fl-icon>
		</div>
	</div>
</template>

<script lang="ts">
import { MenuFoldOutlined } from "@ant-design/icons-vue";
export default {
	components: {
		MenuFoldOutlined,
	},
	emits: ["collapseMenu"],
	setup(props, { emit }) {
		const collapseMenu = () => {
			emit("collapseMenu");
		};

		return {
			collapseMenu,
		};
	},
};
</script>

<style lang="scss" scoped>
.v3-layouts-header {
	width: 100%;
	height: 64px;
	padding: 0 24px;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	background: #09215c;
	color: #fff;
	position: relative;
	z-index: 99;
	.v3-layouts-left {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}
}
</style>
