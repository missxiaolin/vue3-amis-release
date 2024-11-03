/* eslint-disable */

/*类型命名建议以Ty结尾*/
/*
*
枚举 类，接口 都是大驼峰 WangMeng
方法，变量，常量 小驼峰 wangMeng
* */
/*通用对象*/
export interface ObjTy {
	[propName: string]: any;
}
/*axiosReq请求配置*/
export interface ResResult<T = ObjTy> {
	success: boolean;
	model: T;
	totalCount?: number;
	errorMessage?: string;
}
