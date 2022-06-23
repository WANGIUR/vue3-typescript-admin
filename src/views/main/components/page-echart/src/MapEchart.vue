<script setup lang="ts">
import { computed } from 'vue'
import WrEchart from '@/components/echart'
import { convertData } from '../utils/convert-data'
import { IDataType } from '../type'

const props = defineProps<{
  title?: string
  mapData: IDataType[]
}>()

const option = computed(() => {
  return {
    backgroundColor: '#fff',
    title: {
      text: '全国销售情况',
      left: 'center',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name + ' : ' + params.value[2]
      }
    },
    visualMap: {
      min: 0,
      max: 80000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      },
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'china',
      zoom: 1,
      roam: true,
      label: {
        show: false
      },
      emphasis: {
        areaColor: 'rgb(19, 91, 153)',
        borderColor: 'rgb(9, 54, 95)',
        itemStyle: {
          areaColor: 'rgb(10, 105, 187)'
        }
      }
    },
    series: [
      {
        name: '销量',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(props.mapData),
        symbolSize: 12,
        emphasis: {
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          }
        }
      },
      {
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
    // dataset: {source: mapdata}
  }
})
</script>

<template>
  <div class="map-echart">
    <WrEchart :option="option" />
  </div>
</template>

<style lang="less" scoped></style>
