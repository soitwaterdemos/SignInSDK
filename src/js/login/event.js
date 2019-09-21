// import '../common/fetch.js'
// import { fetchPost } from '../common/fetch.js'
import axios from "axios"
import {check} from "../common/form-check.js"

export default (opts={}) => {
  const $loginForm = document.getElementById('soitwater-login-form')
  const $loginBtn = document.getElementById('login-btn')
  const $remember = document.getElementById("login-remember")
  const $clearAccount = document.getElementById("soitwater-clear-account") // 清除账号
  const $account = document.getElementById("soitwater-login-account")
  const $password = document.getElementById("soitwater-login-password")
  const $error = document.getElementById("login-error")

  // 表单验证流程
  // 点击登录
  $loginForm.onsubmit = (e) => {
    e.preventDefault(e)
    const checkResults = check($loginForm) // checkResults：错误结果
    if (!checkResults.length) { // 账号,密码无格式错误
      axios.create({ headers: { 'Content-Type': 'application/json' } }).post('/login', JSON.stringify({
        account: $account.value,
        password: $password.value,
      })).then(res => {
        console.log("hui fu ?? ", res)
        if (res.status === 200) {
          opts.success && opts.success() // 执行设置里的"成功回调函数"
        } else { // 登录错误
          $error.innerHTML = data.message
        }
      })
    } else { // 账号,密码存在格式错误
      console.log("error", checkResults)
    }

  }

  $account.oninput = () => { // 监听用户的输入过程
    if ($account.value.length) { // "清除账号"按钮是否显示
      $clearAccount.style.display = "block"
    } else {
      $clearAccount.style.display = "none"
    }
    $error.innerHTML = ''
    return
  }

  $clearAccount.oncilck = (e) => {
    $account.value = ''
    $clearAccount.style.display = "none"
  }

  $password.oninput = (e) => {
    return
  }
}