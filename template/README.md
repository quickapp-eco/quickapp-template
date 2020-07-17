# {%name%}

{%description%}

## 安装

运行 `npm install` 指令安装依赖，因部分依赖涉及公司私有 npm 源，请不要使用 `cnpm install`

## 开发

### 自动编译项目：
如果希望每次修改源代码文件后，都自动编译项目并启动服务，请使用如下命令：

`npm run start`

### 手动编译项目：
在项目的根目录下，运行如下命令进行编译打包，生成 rpk 包

- `npm run build` （使用 debug 签名）
- `npm run release` （使用 release 签名）

编译打包成功后，项目根目录下会生成文件夹：build、dist

- build：临时产出，包含编译后的页面 js，图片等
- dist：最终产出，包含 rpk 文件。其实是将 build 目录下的资源打包压缩为一个文件，后缀名为 rpk，这个 rpk 文件就是项目编译后的最终产出

{%#e2eTest%}
## e2e测试

修改`manifest.json`中的 `router.entry`配置修改为 `Pages/TestSummary`

执行下列命令

- `npm run build:test`（启动服务并编译一次）
- `npm run watch:test`（启动服务并监听文件改动，及时编译）
{%/e2eTest%}

## 调试

可参考快应用官方[调试文档](https://doc.quickapp.cn/tutorial/overview/debug.html)

## 了解更多

你可以通过我们的[官方文档](https://doc.quickapp.cn/)熟悉和了解快应用。

可以通过我们[快应用官方示例项目](https://github.com/quickappcn/sample)，快速掌握
api 和组件的用法

对我们有什么意见，建议或者 bug，可以在这里反馈
https://github.com/quickappcn/issues
