/**
 * @name VueSetupExtend
 * @description 解决不用写两个script标签，可以直接在script标签上定义name。
 * @example <script lang="ts" setup name="OrderList">
 */
import VueSetupExtend from "vite-plugin-vue-setup-extend";
export const setupExtend = () => VueSetupExtend();
