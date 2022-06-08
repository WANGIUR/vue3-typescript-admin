<script setup lang="ts">
import { reactive } from 'vue'
import { loginPhonerules } from '../config/login-phone'

const phone = reactive({
  phone_num: '',
  v_code: ''
})
const rules = reactive(loginPhonerules)
</script>

<template>
  <div class="login-phone">
    <el-form :rules="rules" :model="phone" status-icon>
      <el-form-item label-width="70px" label="手机号" prop="phone_num">
        <el-input v-model="phone.phone_num" />
      </el-form-item>
      <el-form-item label-width="70px" label="验证码" prop="v_code">
        <div class="v-code">
          <el-input v-model="phone.v_code" />
          <el-button type="primary" class="v-code-btn">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<style lang="less" scoped>
.login-phone {
  .v-code {
    display: flex;
    justify-content: space-between;

    .v-code-btn {
      margin-left: 4px;
    }
  }
}
</style>
