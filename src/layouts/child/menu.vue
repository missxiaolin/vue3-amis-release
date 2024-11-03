<template>
  <div class="v3-menu-d">
    <a-menu
      v-model:openKeys="state.openKeys"
      v-model:selectedKeys="state.selectedKeys"
      :mode="state.mode"
      :items="items"
      :theme="state.theme"
      class="v3-menu"
      @click="titleClick"
    ></a-menu>
  </div>
</template>
<script lang="ts">
import { reactive } from "vue";
import type { MenuMode, MenuTheme } from "ant-design-vue";
import { ItemType } from "ant-design-vue";
import { RouterTy } from "@/types/router";
import { constantRoutes } from "@/router/index";
import { useRouter } from "vue-router";

export default {
  setup() {
    const state = reactive({
      mode: "inline" as MenuMode,
      theme: "light" as MenuTheme,
      selectedKeys: [],
      openKeys: [],
    });
    let items: ItemType[] = reactive([]);

    const router = useRouter();

    const routeFun = (routes: any) => {
      let arr: ItemType[] = [];

      routes.forEach((item: RouterTy) => {
        if (item.meat && !item.meat.hide) {
          let obj = {
            key: item.path,
            label: item.meat.title,
            title: item.meat.title,
          };

          if (!!item.children && item.children.length > 0) {
            obj.children = routeFun(item.children);
          }
          arr.push(obj);
        }
      });

      return arr;
    };

    items = routeFun(constantRoutes);

    const titleClick = (item) => {
      router.push(item.key);
    };

    return {
      state,
      items,
      titleClick,
    };
  },
};
</script>

<style scoped lang="scss">
.v3-menu-d {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
