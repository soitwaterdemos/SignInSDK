const template = (opts = {}) => {
  const autocompleteTpl = `
    <div id="soitwater-no-autocomplete">
      <input style="width:0;height:0;padding:0;margin:0;opacity:0;" type="text">
      <input style="width:0;height:0;padding:0;margin:0;opacity:0;" type="password">
    </div>
  `
  const autocompleteAdaptor = opts.autocomplete ? '' : autocompleteTpl // chrome 浏览器 不支持<input>标签的 autocomplete 属性，因此这里用了一个技巧
  const autocompleteValue = opts.autocomplete ? 'on' : 'off' // 部分浏览器支持 autocomplete 属性，则使用该属性（开启/关闭 账号/密码 的自动填充）
  const tpl = `
    <div id="soitwater-login-wrapper">
      <form id="soitwater-login-form" onsubmit="return false">
        ${ autocompleteAdaptor }
        <label class="soitwater-login-accout-wrapper">
          <span class="soitwater-account-label">${ opts.accountLabel }</span>
          <input id="soitwater-login-account" name="soitwater-account" type="text" placeholder="${ opts.accountPlaceholder}" autocomplete="${opts.autocompleteValue}" valid="present">
          <span id="soitwater-clear-account" class="soitwater-del">
        </label>

        <label class="soitwater-login-accout-wrapper">
          <span class="soitwater-password-label">${ opts.passwordLabel }</span>
          <input id="soitwater-login-password" name="soitwater-passwrod" type="password" placeholder="${ opts.passwordPlaceholder}" autocomplete="${opts.autocompleteValue}" valid="present">
        </label>

        <label class="soitwater-remember-wrapper" style="display:${opts.showRemember}">
          <span>${ opts.rememberLabel }</span>
          <input id="soitwater-login-remember" name="soitwater-remember" type="checkbox">
        </label>
    
        <input id="soitwater-login-btn" class="soitwater-login-btn" type="submit" value="${ opts.loginBtnText }">
      </form>
    </div>
  `
  return tpl
}

export default (conf = {}) => {
  // document.getElementById("soitwater-login-wrapper")
  conf.container.innerHTML = template(conf)
  // const $noAutocomplete = document.getElementById('soitwater-no-autocomplete')
  // if ($noAutocomplete) {
  //   console.log("关闭 ")
  //   $noAutocomplete.style.opacity = '0'
  //   $noAutocomplete.style.height = '0'
  // }
}