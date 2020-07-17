# quickapp-template

本项目是快应用通用模板项目，包含了常用快应用工具库，网络增强 axios，自动化测试，应用级状态管理方案等一系列开箱即用的解决方案。

## 增强功能

本模版基于 快应用官方模版，并添加了常用的增强功能，可参看下表清单

- 项目构建延用 `hap-toolkit`
- 网络通信 [quickapp-axios](https://github.com/quickapp-eco/quickapp-axios)
- 状态管理 [qappx](https://github.com/quickapp-eco/qappx)，按需引用，非必选
- css 预处理器 [less](https://less.bootcss.com/) ，按需引用，非必选
- 代码提交规范 [commitizen](https://www.npmjs.com/package/commitizen) + [commitlint](https://www.npmjs.com/package/@commitlint/cli)
- 快应用工具库 qapp-utils
- 支持转换图片格式到`webp`以减少 rpk 包大小 [qappwebp-webpack-plugin](https://github.com/quickapp-eco/qappwebp-webpack-plugin)


## 工程目录结构

```
├── build --------------------------- 编译后文件
├── dist ---------------------------- 编译打包后的rpk文件
├── sign ----------------------------- 签名文件
│   ├── debug ------------------------ 开发签名
│   │   ├── certificate.pem ---------- 证书
│   │   ├── private.pem -------------- 私钥
├── src
│   ├── Cards ------------------------ 快应用卡片
│   │   ├── CardDemo ----------------- 卡片demo
│   ├── Common ----------------------- 公共静态资源
│   │   ├── images ------------------- 图片资源
│   │   ├── styles ------------------- 样式文件
│   │   ├── logo.png ----------------- 快应用logo
│   ├── Pages ------------------------ 统一存放项目页面级代码
│   │   ├── About -------------------- about页面目录
│   │   ├── ...
│   ├── Services --------------------- 快应用服务
│   │   ├── fetch.js ----------------- 网络请求服务
│   ├── app.ux ----------------------- 应用程序代码的人口文件
│   ├── global.js -------------------- 全局能力的配置与获取
│   ├── manifest.json ---------------- 配置快应用基本信息
│   ├── regenerator.js --------------- 支持async/await
│   ├── store.js --------------------- 全局状态管理store
│────── util.js ---------------------- 辅助功能
```

## 安装

运行 `npm install` 指令安装依赖

## 开发

自动编译项目
如果希望每次修改源代码文件后，都自动编译项目并启动服务，请使用如下命令：

`npm run dev`

手动编译项目
在项目的根目录下，运行如下命令进行编译打包，生成 rpk 包

- `npm run build` （使用 debug 签名）
- `npm run release` （使用 release 签名）

编译打包成功后，项目根目录下会生成文件夹：build、dist

- build：临时产出，包含编译后的页面 js，图片等
- dist：最终产出，包含 rpk 文件。其实是将 build 目录下的资源打包压缩为一个文件，后缀名为 rpk，这个 rpk 文件就是项目编译后的最终产出


## 调试

可参考快应用官方[调试文档](https://doc.quickapp.cn/tutorial/overview/debug.html)

## License

[MIT](./LICENSE)