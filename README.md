# Vue 3 + Typescript + Vite

该项目使用 Vue 3 和 Vite 中的 Typescript 进行开发。该模板使用 Vue 3`<script setup lang="ts">`SFCs，请查看[script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-脚本设置）了解更多信息。

## 推荐的 IDE 设置

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## 准备

- `Node`: 版本建议 >= 12.0.0 [下载链接](https://nodejs.org/zh-cn/download/)
- `Git`: [版本管理工具](https://www.git-scm.com/download)
- `Visual Studio Code`: [最新版本](https://code.visualstudio.com/Download/)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) - vue 开发必备
  - [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)- 脚本代码检查
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化
  - [Stylelin](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint) - css 格式化
  - [ni](https://github.com/antfu/ni) - 依赖管理

## 打开 VSCode，安装以下插件：

- eslint
- stylelint
- volar

## 安装使用



### 设置私有库

#### 私有库

~~~~
username wangli01
password Wangli02###
email walley@126.com
~~~~

#### 设置

～～～
npm install nrm -g
nrm add nexus http://nexus.csntcorp.com/repository/npm-releases/
nrm use nexus
npm config set registry http://nexus.csntcorp.com/repository/npm-releases/
npm login
yarn install
～～～

- 获取代码

```sh
git clone xxx
```

- 安装依赖

```sh
ni install
```

- 运行

```sh
ni serve
```

- 打包

```sh
ni build
```

- 本地预览

```sh
ni preview
```

- 打包/预览

```sh
ni build:preview
```

## 打开 VSCode 配置文件（Mac command + shift + p，windows ctrl + shift + p，输入 settings）。

> 注意，有些依赖版本对不上的时候，会造成格式化失败。例如 eslint 插件使用 8.0 版本以上格式化就报错，后来使用的是 7.0 的版本

```js
    // prettier-自动格式化代码
    "editor.formatOnSave": false,
    "[javascript]": {
        "editor.formatOnSave": true
    },
    "[typescript]": {
        "editor.formatOnSave": true
    },
    "[vue]": {
        "editor.formatOnSave": true
    },
    "newline-after-var": true, // 变量生命必须空行
    // prettier-使用单引号
    "prettier.singleQuote": false,
    // prettier-不要分号
    "prettier.semi": false,
    // prettier- (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
    "prettier.arrowParens": "avoid",
    //  prettier-在对象，数组括号与文字之间加空格 "{ foo: bar }"
    "prettier.bracketSpacing": true,
    "editor.codeActionsOnSave": {
        "source.fixAll": true,
    },
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript"
    ],
    "eslint.alwaysShowStatus": true,
    "stylelint.validate": [
        "css",
        "less",
        "postcss",
        "scss",
        "vue",
        "sass"
    ],
```

### VueUse 官网

https://vueuse.nodejs.cn/core/onClickOutside/

### tailwindcss 原子化 css

https://tailwind.nodejs.cn/
