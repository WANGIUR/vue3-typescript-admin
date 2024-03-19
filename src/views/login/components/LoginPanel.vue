<script setup lang="ts">
import { ref } from 'vue'
import LoginAccount from './LoginAccount.vue'
import LoginPhone from './LoginPhone.vue'
import { localCache } from '@/utils'

const isKeepPwd = ref(false)
const accountRef = ref<InstanceType<typeof LoginAccount> | null>(null)
const phoneRef = ref<InstanceType<typeof LoginPhone> | null>(null)
const curTab = ref('account')

// 记住密码状态初始
if (localCache.getCache('isKeepPwd')) {
  isKeepPwd.value = localCache.getCache('isKeepPwd')
}

const handleLoginClick = () => {
  if (curTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPwd.value)
  } else {
    console.log('调用phone的loginAction')
  }
}
</script>

<template>
  <div class="login-panel">
    <h1 class="title rainbow">vue3-typescript-admin</h1>
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="curTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><User /></el-icon>
            <span>账号登录</span>
          </span>
        </template>
        <LoginAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon><Iphone /></el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <LoginPhone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="pwd-operate">
      <el-checkbox v-model="isKeepPwd">记住密码</el-checkbox>
      <el-link type="primary">忘记密码?</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="handleLoginClick">
      登录
    </el-button>
  </div>
</template>

<style lang="less" scoped>
.login-panel {
  width: 360px;
  margin-bottom: 240px;

  .title {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .default-account {
    text-align: center;
    font-size: 12px;
  }
  .demo-tabs .custom-tabs-label .el-icon {
    vertical-align: middle;
  }
  .demo-tabs .custom-tabs-label span {
    vertical-align: middle;
    margin-left: 4px;
  }
  .pwd-operate {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px 0;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
