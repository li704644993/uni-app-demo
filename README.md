**# uni-app-demo**



**## 怎样使用**

```
npm install
然后使用Hbuilder编译至目标平台，目前仅支持H5，微信小程序，App(ios only)
```



**### 基本情况**

使用uni-app做的自用简单demo，封装了最基础的组件

ui [uni-ui](https://github.com/dcloudio/uni-ui).（基于uni-app的ui框架）

css库 [ColorUI](https://github.com/weilanwl/ColorUI).（这是一款适应于H5、微信小程序、安卓、ios、支付宝的高颜值，高度自定义的Css组件库.）

路由管理 [uni-simple-router](https://github.com/SilurianYang/uni-simple-router).（一个更为简洁的[Vue-router](https://router.vuejs.org/zh/)，专为 [uni-app](https://uniapp.dcloud.io/) 量身打造）

网络请求[luch-request](https://ext.dcloud.net.cn/plugin?id=392).（仿axios封装request 网络请求库，支持拦截器以及类似axios create函数功能）



**### 其他说明**

如果目标平台为H5，可在vue.config.js中修改代理避免跨域问题。可能需要同步修改http/url.js中的baseurl。