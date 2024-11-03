/* eslint-disable */

/*page common ts*/
import { RouteRecordRaw } from "vue-router";
import { ObjTy } from "./common";
interface mate {
	hide?: boolean;
	title?: string;
}
/*此处扩展的类型*/
interface RouteItemTy {
	path?: string;
	name?: string;
	redirect?: string;
	meat?: mate;
	children?: RouteItemTy[];
}

type RouterRowTy = RouteRecordRaw & RouteItemTy;
type RouterTy = Array<RouterRowTy>;
