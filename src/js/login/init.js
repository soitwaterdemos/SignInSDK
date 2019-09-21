import render from './render.js'
import bindEvent from './event.js'

const login = (opts = {}) => {
  const defaultOpts = {
    container: document.getElementById("container"), // select 登录/注册表单的父元素
    loginBtnText: '登 录', // 登录按钮上的文字
    accountPlaceholder: '手机号/邮箱/账号',
    passwordLabel: '请填写密码',
    accountLabel: '',
    passwordPlaceholder: '',
    autocomplete: false, // 允许自动补全 账号/密码(false 为关闭自动填充 账号/密码)
    showRemember: 'block', // 显示 记住密码checkbox（block | none）
    rememberLabel: '记住密码: ', // 记住密码 的提示文本
  }
  const options = Object.assign(defaultOpts, opts) // merge 默认配置项与用户自定义配置项
  render(options)
  bindEvent(options)
}

export { login }