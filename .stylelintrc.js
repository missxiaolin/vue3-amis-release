/*
 * @Author: wangweidong
 * @Date: 2024-10-14 13:40:00
 * @LastEditors: wangweidong
 * @LastEditTime: 2024-10-17 09:07:25
 * @FilePath: /iflorens-web-v4/.stylelintrc.js
 * @Description: 
 */
module.exports = {
	extends: "stylelint-config-standard",
	customSyntax: 'postcss-html',
	rules: {
		indentation: 4,
		"selector-pseudo-element-no-unknown": [
			true,
			{
				ignorePseudoElements: ["v-deep"],
			},
		],
		"number-leading-zero": "never",
		"no-descending-specificity": null,
		"font-family-no-missing-generic-family-keyword": null,
		"selector-type-no-unknown": null,
		"at-rule-no-unknown": null,
		"no-duplicate-selectors": null,
		"no-empty-source": null,
		"selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["global"] }],
	},
};
