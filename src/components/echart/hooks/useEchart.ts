import * as echarts from 'echarts'
import ChinaMapData from '../data/china.json'

// 注册中国地图
echarts.registerMap('china', ChinaMapData)

export default function (el: HTMLElement) {
  const echartInstance = echarts.init(el)
  const setOption = (option: echarts.EChartsOption) => {
    echartInstance.setOption(option)
  }

  // 除窗口意外的大小适应
  const setSize = () => {
    echartInstance.resize()
  }

  // 监听窗口大小改变，重新适应对应的宽高
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })

  return {
    echartInstance,
    setOption,
    setSize
  }
}
