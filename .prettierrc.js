module.exports = {
	// 一行最多 100 字符
	printWidth: 600,
	// 使用 2 个空格缩进
	tabWidth: 2,
	// 不使用缩进符，而使用空格
	useTabs: true,
	// 句尾添加分号
	semi: true,
	// 使用单引号代替双引号
	singleQuote: false,
	// 对象的 key 仅在必要时用引号
	quoteProps: "as-needed",
	// 尾随逗号
	trailingComma: "all",
	//  在对象，数组括号与文字之间加空格 "{ foo: bar }"
	bracketSpacing: true,
	//  (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
	arrowParens: "avoid",
	// 每个文件格式化的范围是文件的全部内容
	rangeStart: 0,
	rangeEnd: Infinity,
	// 不需要写文件开头的 @prettier
	requirePragma: false,
	// 不需要自动在文件开头插入 @prettier
	insertPragma: false,
	// 使用默认的折行标准
	proseWrap: "preserve",
	// 根据显示样式决定 html 要不要折行
	htmlWhitespaceSensitivity: "css",
	// 换行符使用 lf
	endOfLine: "lf",
	eslintIntegration: false, //不让prettier使用eslint的代码格式进行校验
	jsxBracketSameLine: false, // 在jsx中把'>' 是否单独放一行
	jsxSingleQuote: true, // 在jsx中使用单引号代替双引号
	extends: [
		//继承 vue 的标准特性
		"plugin:vue/essential",
		"eslint:recommended",
		//避免与 prettier 冲突
		"plugin:prettier/recommended",
	],
	overrides: [
		{
			files: "*.json",
			options: {
				printWidth: 200,
			},
		},
	],
};
