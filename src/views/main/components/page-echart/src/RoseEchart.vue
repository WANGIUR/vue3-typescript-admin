<script setup lang="ts">
import { computed } from 'vue'
import WrEchart from '@/components/echart'
import type { IDataType } from '../type'

const props = defineProps<{
  title?: string
  roseData: IDataType
}>()

const option = computed(() => {
  return {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: [10, 120],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.roseData
      }
    ]
  }
})
</script>

<template>
  <div class="rose-echart">
    <WrEchart :option="option" />
  </div>
</template>

<style lang="less" scoped></style>
