# Tauri + Vue + TypeScript

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## 项目简介

本项目基于 Tauri2.0+Vue3+TypeScript 开发，是一个跨平台的应用。

## 编译环境准备

项目使用 npm 进行包管理，属于多端开发，编译 PC 端需要 C++编译环境（通过 visual studio 安装），编译 Android 端需要 Java 环境、Android SDK 以及 NDK(通过 Android Studio 安装)，还需要更改环境变量。

## 环境变量配置

1. 安装 C++编译环境
2. 安装 Java 环境
3. 安装 Android SDK
4. 安装 NDK
5. 配置环境变量

## PC 端测试命令

```
npm run tauri dev
npm run tauri build
```

## Android 端测试命令

```
npm run tauri android init  //使用之前需要先初始化
npm run tauri android dev
npm run tauri android build
npm run tauri android build -- --target aarch64  //编译arm64架构的apk,需要更改的配置参考链接：https://blog.51cto.com/u_16175490/9263431
 npx tauri android build --apk --target aarch64  //自己的电脑
```

## 签名配置

keytool -genkey -v -keystore $env:USERPROFILE\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload //生成签名文件
keytool -list -v -keystore $env:USERPROFILE\upload-keystore.jks -alias upload //查看签名文件信息

## 参考链接

//https://blog.csdn.net/weixin_44786530/article/details/138795670
//https://muyacode.github.io/FrontEndLearnNotes/Document/%E8%B7%A8%E5%B9%B3%E5%8F%B0%E6%A1%8C%E9%9D%A2%E7%AB%AF%E5%BC%80%E5%8F%91/Tauri%E6%A1%86%E6%9E%B6/Tauri2%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%BC%80%E5%8F%91%E5%92%8C%E6%89%93%E5%8C%85
以上两个地址协助打包 android 的 apk，先安装 android 的 sdk 以及 ndk，然后初始化项目 npm run tauri init,然后运行 npm run tauri android dev,
