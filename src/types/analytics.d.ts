export interface breadTy {
	id: number;
	menuName: string;
}

export type reportTypeTy = "rep" | "fav";

export type breadListTy = breadTy[];

export interface ListTy {
	id: string;
	menuName: string;
	menuDesc: string;
	menuType: "report" | "dashboard" | "folder";
	departmentCode: string[];
	topicName: string[];
	tagsName: string[];
	menuUrl: string;
	parentId: number;
	prioritization: number;
	folderType: 0 | 1;
}
export interface reqTy {
	type: reportTypeTy;
	id?: string;
	menuName?: string;
	departmentCode?: string;
	topicName?: string;
	tagsName?: string;
	sort?: string;
}
