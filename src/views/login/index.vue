<script setup lang="ts">
import LoginPanel from './components/LoginPanel.vue'
</script>

<template>
  <div class="login">
    <LoginPanel />
  </div>
</template>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url('@/assets/svgs/login-bg.svg');
}
</style>
