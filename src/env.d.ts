/* eslint-disable */

interface ImportMetaEnv extends Readonly<Record<string, string>> {
	// 更多环境变量...
	readonly VITE_APP_BASEURL: string;
	readonly VITE_APP_CLOUDKEY: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
