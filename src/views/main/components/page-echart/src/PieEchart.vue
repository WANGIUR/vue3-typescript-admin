<script setup lang="ts">
import { computed } from 'vue'
import WrEchart from '@/components/echart'
import type { IDataType } from '../type'

const props = defineProps<{
  title?: string
  pieData: IDataType[]
}>()

const option = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pieData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<template>
  <div class="pie-echart">
    <WrEchart :option="option" />
  </div>
</template>

<style lang="less" scoped></style>
