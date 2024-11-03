<template>
	<div class="amis-edit-content">
		<AmisEditor id="editorName" theme="cxd" className="test-amis-editor" />
	</div>
</template>

<script lang="ts" setup>
// 引入一些样式依赖
import "amis-ui/lib/themes/default.css";
import "amis-ui/lib/themes/cxd.css";
import "amis-editor-core/lib/style.css";

import { Editor } from "amis-editor-core"

import { applyReactInVue } from "veaury";

// import { Editor } from "amis-editor"; //引入编辑器

// import textData from "./textJson";
const AmisEditor = applyReactInVue(Editor); //使用编辑器

// const previewModel = ref(false); //是否预览,实际开发中，如果需要编辑和预览，可以写一个change事件来改变这个值的状态
// const mobileModel = ref(false); //是否是手机模式

// const schema = reactive({}); //渲染表单的内容

// const editorChanged = (value: any) => {
// 	//编辑器内容变化后触发的方法
// 	console.log("编辑器内容变化了。。。。");
// 	//todo  如果需要将数据保存，在这里可以操作
// };
</script>

<style lang="scss" scoped>
.amis-edit-content {
	width: 100%;
	min-height: 100vh;
	:deep(.test-amis-editor) {
		min-height: 100vh !important;
		overflow-y: auto;
	}
	:deep(.ae-Editor-inner) {
		min-height: 100vh !important;
		overflow-y: auto;
	}
}
</style>
