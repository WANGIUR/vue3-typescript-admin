<script setup lang="ts">
import { ref, onMounted, watchEffect } from 'vue'
import type { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    option: EChartsOption
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartDivRef = ref<HTMLElement>()

// setup执行完模版未完全编译，需要保证DOM已挂载
onMounted(() => {
  const { setOption } = useEchart(echartDivRef.value as HTMLElement)

  watchEffect(() => {
    setOption(props.option)
  })
})
</script>

<template>
  <div class="wr-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<style lang="less" scoped></style>
