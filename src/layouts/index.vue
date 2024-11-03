<template>
  <div class="v3-layouts">
    <!-- 头部导航 -->
    <v3-header :screenWidth="screenWidth" @collapseMenu="collapseMenu" />
    <!-- 主体内容 -->
    <div class="v3-layouts-content">
      <!-- 左侧菜单 -->
      <Transition name="menu">
        <div
          v-if="menuWhetherToFoldOrNot === 'show'"
          :class="['v3-layouts-menu']"
        >
          <v3-menu titleKey="title" />
        </div>
      </Transition>
      <!-- 右侧盒子主体 -->
      <Transition name="content">
        <div
          :class="[
            'v3-layouts-content-cnt',
            menuWhetherToFoldOrNot === 'hide' ? 'v3-layouts-hidden' : '',
          ]"
        >
          <router-view></router-view>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import v3Header from "./child/header.vue";
import v3Menu from "./child/menu.vue";

export default {
  components: {
    v3Header,
    v3Menu,
  },
  setup() {
    const screenWidth =
      window.innerWidth || window.document.documentElement.clientWidth;
    let menuWhetherToFoldOrNot = ref("show");

    const collapseMenu = () => {
      menuWhetherToFoldOrNot.value =
        menuWhetherToFoldOrNot.value === "show" ? "hide" : "show";
    };

    return {
      screenWidth,
      menuWhetherToFoldOrNot,
      collapseMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.v3-layouts {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f5f6f9;
  display: flex;
  flex-direction: column;
  .v3-layouts-content {
    width: 100%;
    height: calc(100% - 64px);
    display: flex;
    position: relative;
    z-index: 0;
    flex: 1;
    display: flex;
    flex-direction: row;
  }
  .v3-layouts-menu {
    width: 240px;
    min-height: calc(100% - 64px);
    overflow: hidden;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0px 0px 15px 0px rgba(64, 75, 112, 0.13);
    position: relative;
    z-index: 1;
    flex: 1;
  }
  .v3-layouts-content-cnt {
    width: calc(100% - 240px);
    height: calc(100vh - 64px);
    display: block !important;
  }
  .v3-layouts-hidden {
    width: 100%;
  }
}
</style>
