module.exports = {
	root: true,

	env: {
		node: true,
	},
	parser: "vue-eslint-parser",
	// , "plugin:prettier/recommended"
	// "plugin:vue/recommended",
	extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/typescript/recommended"],

	parserOptions: {
		ecmaVersion: 2020,
		parser: "@typescript-eslint/parser",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true,
		},
	},

	rules: {
		"vue/html-indent": [
			"off",
			4,
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
		"vue/singleline-html-element-content-newline": "off",
		// 关闭此规则 使用 prettier 的格式化规则， 感觉prettier 更加合理，
		// 而且一起使用会有冲突
		"vue/max-attributes-per-line": ["off"],
		// 强制使用驼峰命名
		"vue/component-name-in-template-casing": [
			"off",
			"PascalCase",
			{
				registeredComponentsOnly: false,
				ignores: [],
			},
		],
		"vue/html-self-closing": "off",
		"array-bracket-spacing": ["error", "never"], // 是否允许非空数组里面有多余的空格
		"block-spacing": ["error", "always"], // =>的前/后括号
		camelcase: "error", // 强制驼峰法命名
		"comma-spacing": "off", // 逗号前后的空格
		"comma-style": ["error", "last"], // 逗号风格，换行时在行首还是行尾
		complexity: ["off", { max: 5 }], // 循环复杂度
		"computed-property-spacing": ["off", "never"], // 是否允许计算后的键名什么的
		"consistent-return": "off", // return 后面是否允许省略
		"consistent-this": ["error", "that"], // this别名
		"constructor-super": "off", // 非派生类不能调用super，派生类必须调用super
		curly: ["error", "all"], // 必须使用 if(){} 中的{}
		"default-case": "error", // switch语句最后必须有default
		"dot-location": "off", // 对象访问符的位置，换行的时候在行首还是行尾
		"dot-notation": ["off", { allowKeywords: true }], // 避免不必要的方括号
		"eol-last": "off", // 文件以单一的换行符结束
		eqeqeq: "error", // 要求使用 === 和 !==
		"func-names": "off", // 函数表达式必须有名字
		"func-style": ["off", "declaration"], // 函数风格，规定只能使用函数声明/函数表达式
		"generator-star-spacing": "off", // 生成器函数*的前后空格
		"guard-for-in": "off", // for in循环要用if语句过滤
		"handle-callback-err": "off", // nodejs 处理错误
		"id-length": "off", // 变量名长度
		indent: ["off", 2], // 缩进风格
		"init-declarations": "off", // 声明时必须赋初始值
		"key-spacing": ["off", { beforeColon: false, afterColon: true }], // 对象字面量中冒号的前后空格
		"lines-around-comment": "off", // 行前/行后备注
		"max-depth": "off", // 嵌套块深度
		"max-len": "off", // 字符串最大长度
		"max-nested-callbacks": ["off", "error"], // 回调嵌套深度
		"max-params": ["off", 3], // 函数最多只能有3个参数
		"max-statements": ["off", 10], // 函数内最多有几个声明
		"new-cap": "off", // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
		"new-parens": "error", // new时必须加小括号
		"newline-after-var": "off", // 变量声明后是否需要空一行
		"no-alert": "off", // 禁止使用alert confirm prompt
		"no-array-constructor": "error", // 禁止使用数组构造器
		"no-bitwise": "off", // 禁止使用按位运算符
		"no-caller": "warn", // 禁止使用arguments.caller或arguments.callee
		"no-catch-shadow": "error", // 禁止catch子句参数与外部作用域变量同名
		"no-class-assign": "error", // 禁止给类赋值
		"no-cond-assign": "error", // 禁止在条件表达式中使用赋值语句
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off", // 是否使用 console
		"no-const-assign": "error", // 禁止修改const声明的变量
		"no-constant-condition": "error", // 禁止在条件中使用常量表达式 if(true) if('warn')
		"no-continue": "off", // 禁止使用continue
		"no-control-regex": "error", // 禁止在正则表达式中使用控制字符
		"no-delete-var": "error", // 不能对var声明的变量使用delete操作符
		"no-div-regex": "warn", // 不能使用看起来像除法的正则表达式/=foo/
		"no-dupe-keys": "error", // 在创建对象字面量时不允许键重复 {a:'warn',a:'warn'}
		"no-dupe-args": "error", // 函数参数不能重复
		"no-duplicate-case": "error", // switch中的case标签不能重复
		"no-else-return": "error", // 如果if语句里面有return,后面不能跟else语句
		"no-empty": "error", // 块语句中的内容不能为空
		"no-empty-character-class": "error", // 正则表达式中的[]内容不能为空
		// 'no-empty-label': 'error', // 禁止使用空label
		"no-eq-null": "error", // 禁止对null使用==或!=运算符
		"no-eval": "warn", // 禁止使用eval
		"no-ex-assign": "error", // 禁止给catch语句中的异常参数赋值
		"no-extend-native": "error", // 禁止扩展native对象
		"no-extra-bind": "error", // 禁止不必要的函数绑定
		"no-extra-boolean-cast": "error", // 禁止不必要的bool转换
		"no-extra-parens": "error", // 禁止非必要的括号
		"no-extra-semi": "error", // 禁止多余的冒号
		"no-fallthrough": "warn", // 禁止switch穿透
		"no-floating-decimal": "error", // 禁止省略浮点数中的'off' .5 3.
		"no-func-assign": "error", // 禁止重复的函数声明
		"no-implicit-coercion": "off", // 禁止隐式转换
		"no-implied-eval": "error", // 禁止使用隐式eval
		"no-inline-comments": "off", // 禁止行内备注
		"no-inner-declarations": ["error", "functions"], // 禁止在块语句中使用声明（变量或函数）
		"no-invalid-regexp": "error", // 禁止无效的正则表达式
		"no-invalid-this": "error", // 禁止无效的this，只能用在构造器，类，对象字面量
		"no-irregular-whitespace": "error", // 不能有不规则的空格
		"no-iterator": "error", // 禁止使用__iterator__ 属性
		"no-label-var": "error", // label名不能与var声明的变量名相同
		"no-labels": "error", // 禁止标签声明
		"no-lone-blocks": "error", // 禁止不必要的嵌套块
		"no-lonely-if": "error", // 禁止else语句内只有if语句
		"no-loop-func": "warn", // 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
		"no-mixed-requires": ["off", false], // 声明时不能混用声明类型
		"no-mixed-spaces-and-tabs": ["off", false], // 禁止混用tab和空格
		"linebreak-style": ["off", "windows"], // 换行风格
		"no-multi-spaces": "warn", // 不能用多余的空格
		"no-multi-str": "error", // 字符串不能用\换行
		// 'no-multiple-empty-lines': ['warn', { 'max': 'error' }], // 空行最多不能超过'error'行
		"no-native-reassign": "error", // 不能重写native对象
		"no-negated-in-lhs": "error", // in 操作符的左边不能有!
		"no-nested-ternary": "off", // 禁止使用嵌套的三目运算
		"no-new": "warn", // 禁止在使用new构造一个实例后不赋值
		"no-new-func": "warn", // 禁止使用new Function
		"no-new-object": "error", // 禁止使用new Object()
		"no-new-require": "error", // 禁止使用new require
		"no-new-wrappers": "error", // 禁止使用new创建包装实例，new String new Boolean new Number
		"no-obj-calls": "error", // 不能调用内置的全局对象，比如Math() JSON()
		"no-octal": "error", // 禁止使用八进制数字
		"no-octal-escape": "error", // 禁止使用八进制转义序列
		"no-param-reassign": "off", // 禁止给参数重新赋值
		"no-path-concat": "off", // node中不能使用__dirname或__filename做路径拼接
		"no-plusplus": "off", // 禁止使用++，--
		"no-process-env": "off", // 禁止使用process.env
		"no-process-exit": "off", // 禁止使用process.exit()
		"no-proto": "error", // 禁止使用__proto__属性
		"no-redeclare": "error", // 禁止重复声明变量
		"no-regex-spaces": "error", // 禁止在正则表达式字面量中使用多个空格 /foo bar/
		"no-restricted-modules": "off", // 如果禁用了指定模块，使用就会报错
		"no-return-assign": "warn", // return 语句中不能有赋值表达式
		"no-script-url": "off", // 禁止使用javascript:void('off')
		"no-self-compare": "error", // 不能比较自身
		"no-sequences": "off", // 禁止使用逗号运算符
		"no-shadow": "off", // 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
		"no-shadow-restricted-names": "error", // 严格模式中规定的限制标识符不能作为声明时的变量名使用
		"no-spaced-func": "error", // 函数调用时 函数名与()之间不能有空格
		"no-sparse-arrays": "error", // 禁止稀疏数组， ['warn',,'error']
		"no-sync": "off", // nodejs 禁止同步方法
		"no-ternary": "off", // 禁止使用三目运算符
		"no-trailing-spaces": "warn", // 一行结束后面不要有空格
		"no-this-before-super": "off", // 在调用super()之前不能使用this或super
		"no-throw-literal": "error", // 禁止抛出字面量错误 throw 'error';
		"no-undef": "off", // 不能有未定义的变量
		"no-undef-init": "error", // 变量初始化时不能直接给它赋值为undefined
		"no-undefined": "off", // 不能使用undefined
		"no-unexpected-multiline": "error", // 避免多行表达式
		"no-underscore-dangle": "off", // 标识符不能以_开头或结尾
		"no-unneeded-ternary": "error", // 禁止不必要的嵌套 var isYes = answer === 'warn' ? true : false;
		"no-unreachable": "error", // 不能有无法执行的代码
		"no-unused-expressions": "error", // 禁止无用的表达式
		"no-unused-vars": ["error", { vars: "all", args: "after-used" }], // 不能有声明后未被使用的变量或参数
		"no-use-before-define": "error", // 未定义前不能使用
		"no-useless-call": "error", // 禁止不必要的call和apply
		"no-void": "error", // 禁用void操作符
		"no-var": "off", // 禁用var，用let和const代替
		"no-warning-comments": ["off", { terms: ["todo", "fixme", "xxx"], location: "start" }], // 不能有警告备注
		"no-with": "error", // 禁用with
		"object-curly-spacing": ["off", "never"], // 大括号内是否允许不必要的空格
		"object-shorthand": "off", // 强制对象字面量缩写语法
		"one-var": "off", // 连续声明
		"operator-assignment": ["off", "always"], // 赋值运算符 += -=什么的
		"operator-linebreak": ["error", "after"], // 换行时运算符在行尾还是行首
		"padded-blocks": "off", // 块语句内行首行尾是否要空行
		"prefer-const": "off", // 首选const
		"prefer-spread": "off", // 首选展开运算
		"prefer-reflect": "off", // 首选Reflect的方法
		quotes: ["error", "double"], // 引号类型 `` '' ''
		"quote-props": ["off", "always"], // 对象字面量中的属性名是否强制双引号
		radix: "error", // parseInt必须指定第二个参数
		"id-match": "off", // 命名检测
		"require-yield": "off", // 生成器函数必须有yield
		semi: ["error", "always"], // 语句强制分号结尾
		"semi-spacing": ["warn", { before: false, after: true }], // 分号前后空格
		"sort-vars": "off", // 变量声明时排序
		"space-after-keywords": ["off", "always"], // 关键字后面是否要空一格
		"space-before-blocks": ["off", "always"], // 不以新行开始的块{前面要不要有空格
		"space-before-function-paren": ["off", "always"], // 函数定义时括号前面要不要有空格
		"space-in-parens": ["off", "never"], // 小括号里面要不要有空格
		"space-infix-ops": "off", // 中缀操作符周围要不要有空格
		// 'space-return-throw-case': 'error', // return throw case后面要不要加空格
		"space-unary-ops": ["off", { words: true, nonwords: false }], // 一元运算符的前/后要不要加空格
		"spaced-comment": "off", // 注释风格要不要有空格什么的
		strict: "error", // 使用严格模式
		"use-isnan": "error", // 禁止比较时使用NaN，只能用isNaN()
		"valid-jsdoc": "off", // jsdoc规则
		"valid-typeof": "error", // 必须使用合法的typeof的值
		"vars-on-top": "error", // var必须放在作用域顶部
		"vue/require-v-for-key": "off", // vue的for循环是否必须有key
		"wrap-iife": ["error", "inside"], // 立即执行函数表达式的小括号风格
		"wrap-regex": "off", // 正则表达式字面量用小括号包起来
		yoda: ["error", "never"], // 禁止尤达条件
		"@typescript-eslint/ban-ts-comment": "off",
		"no-console": "error",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "warn", // 是否使用 debugger
		"vue/valid-v-for": "warn",
		"vue/valid-v-html": "warn",
		"vue/valid-v-if": "warn",
		"vue/valid-v-is": "warn",
		"vue/valid-v-on": "warn",
		"vue/valid-v-once": "warn",
		"vue/valid-v-show": "warn",
		"vue/valid-v-slot": "warn",
		"vue/valid-v-text": "warn",
		"vue/multi-word-component-names": "off",
		"vue/no-v-model-argument": "off",
		"vue/no-multiple-template-root": "off",
		"@typescript-eslint/no-explicit-any": ["off"],
		"vue/no-unused-components": "off",
		"vue/attribute-hyphenation": "off",
		"vue/no-v-for-template-key": "off",
		"vue/no-template-shadow": "off",
	},
};
