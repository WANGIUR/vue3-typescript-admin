export const loginAccRules = {
  name: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{2,8}$/,
      message: '用户名必须是4至8位字母或数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{6,8}$/,
      message: '密码必须是6至8位字母或数字',
      trigger: 'blur'
    }
  ]
}
