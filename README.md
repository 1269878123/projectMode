# projectmode

## Project setup

```
npm install
```

# vscode 需要下载插件

1. Prettier - Code formatter
2. Git History

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

1、第一步
新建.env.development 文件，用于储存开发坏境的各种地址
新建.env.online 文件，用于储存线上环境各种地址

2、第二步
创建.eslintignore 用于指定文件不被 eslint 格式化
.eslintrc.js 文件，用于编写 eslint 校验方案
.prettierrc.js 文件，用于保存时代码的格式化
设置.vscode 文件，里面配置 settings.json 文件，用于每次保存时自动格式化代码
设置 package.json 中的 script 内容（此处设置，会生成 npm 脚本）

3.第三步
在 assets 中创建 style 文件，放入重置基本标签 css。并在 main.js 中引用
新建 viewUI 文件夹，在其中引用 antUI 框架（或其它框架），并在 main.js 中引用

4.第四步
修改 vue.config.js 文件中的 webpack 打包配置，configureWebpack 设置打包时文件的大小，
chainWebpack 设置项目文件路径

5.第五步
设置路由系统，添加路由拦截器
