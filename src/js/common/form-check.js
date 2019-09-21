const rules = {
  mobile: v => {
    return
  },
  email: v => {
    return
  },
  present: v => { // 账号,密码不能为空
    if (!v.trim()) {
      return {
        type: 'present',
        message: '_必填_'
      }
    }
  }
}
const check = form => {
  if (!form || !form.elements) {
    return 
  }
  const elements = form.elements
  let checkResults = []
  if (checkResults.length === 0) {
    Array.from(elements).filter(item => {
      return item.getAttribute('valid') // valid 是写在元素上的属性,属性值为检测规则
    }).map(item => {
      const valids = item.getAttribute('valid').split(', ')
      const value = item.value
      let errorArr = []
      valids.forEach(valid => {
        if (rules[valid]) {
          let result = rules[valid](value)
          result && errorArr.push(result)
        }
      })
      if (errorArr.length) {
        checkResults.push({
          dom: item,
          errorArr: errorArr,
          name: item.name,
          message: errorArr[0].message,
          type: errorArr[0].type
        })
      }
    })
  }
  return checkResults
}

export { check }