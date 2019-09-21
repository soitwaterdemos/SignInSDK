## 登录SDK开发
参照某课网上的一个教程敲的...而且还没敲完...

## 运行方式
- `npm run bundle`
- `node server/app.js`, 需要另开一个终端 
- 在浏览器打开链接:`http://localhost:3000/`

## 登录SDK
- 同一公司的不同网站的账号登录应该是同一套,同一模块
- SDK：纯JS,无依赖(不依赖于诸如Vue等框架绑定),高兼容新,高封装性
- 要求：
  * 包足够小
  * 多种引用方式(CommonJS,AMD,ES6 import等)
  * 兼容至IE8

## 项目结构
```
npm init -y
安装webpack
配置webpack.config.js
```
## 开发步骤
### 从`src > js > login`开始
```
src > 
  js > 
    common > 
      polyfill.js：兼容性
    login > 
      event.js：事件绑定
      init.js: 初始化
      render.js：页面渲染
```
SDK开发中添加的DOM节点的id需要添加`hash`，避免重名  
禁用浏览器的自动填写账号/密码的功能：
```html
// 在浏览器的<form>子元素的第一个放置如下，并设置其opacity以及height属性：
// 浏览器默认查找<form>下的第一个 text 以及 password 用于账号/密码填充
<div id="soitwater-no-autocomplete">
  <input type="text">
  <input type="password">
</div>
```
记住密码的逻辑是设置 cookie等的有效期，若勾选记住，有效期7天；若不勾选，有效期一天；  
`onsubmit` 支持监听点击提交，回车提交; `onclick`不支持回车提交  
`oninput` 在`value`改变时触发回调; `onchange`在失去焦点时触发回调  

### 使用express模拟接口开发
- 静态页面也需要通过`express`读取后返回(链接应该是：`http://loacalhost/`，不可以是鼠标直接双击打开的`file`协议)
- `express` 解析`POST`请求需要使用 `body-parser` 或者`formidable`辅助, 否则`req.params`为空(然而实际还是没有解决)  
  应该是`fetch`问题,换了`axios`瞬间解决问题
- fetch设置`Content-Type`失败

### 套路
写SDK拆分模块的套路是`init.js  event.js  render.js`