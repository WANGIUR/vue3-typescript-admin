<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { loginAccRules } from '../config/login-account'
import { localCache } from '@/utils'
import type { FormInstance } from 'element-plus'

const store = useStore()
const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})
const rules = reactive(loginAccRules)
const ruleFormRef = ref<FormInstance>()

defineExpose({
  loginAction
})

const loginAction = (isKeepPwd: boolean) => {
  ruleFormRef.value?.validate((valid) => {
    if (valid) {
      // 判断是否记住密码
      if (isKeepPwd) {
        localCache.setCache('isKeepPwd', true)
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      } else {
        localCache.removeCache('isKeepPwd')
        localCache.removeCache('name')
        localCache.removeCache('password')
      }
      // 登录验证
      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
}
</script>

<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" status-icon ref="ruleFormRef">
      <el-form-item label-width="60px" label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label-width="60px" label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped></style>
