export const loginPhonerules = {
  phone_num: [
    { required: true, message: '请输入手机号', trigger: 'blur' },
    {
      pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
      message: '手机号格式错误',
      trigger: 'blur'
    }
  ],
  v_code: [
    { required: true, message: '请输入短信验证码', trigger: 'blur' },
    {
      pattern: /^\d{4}|\d{6}$/,
      message: '验证码错误，请输入正确的验证码',
      trigger: 'blur'
    }
  ]
}
