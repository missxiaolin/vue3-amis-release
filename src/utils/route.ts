/**
 * 解析url 参数
 * @param queryObject
 * @returns
 */
export function makeQuery(queryObject: any) {
	const query = Object.entries(queryObject)
		.reduce((result: any, entry: any) => {
			result.push(entry.join("="));
			return result;
		}, [])
		.join("&");

	return `?${query}`;
}

// @ts-ignore
const isMicro: any = window.__MICRO_APP_ENVIRONMENT__;

export function goPage(path: string, query: any, name = "main-v4") {
	if (isMicro) {
		// @ts-ignore
		window.microApp.dispatch({ type: "route", name, path: `${path}${makeQuery(query)}`, query, date: new Date() });
	}
}
