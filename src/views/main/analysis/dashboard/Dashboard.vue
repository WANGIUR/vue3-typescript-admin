<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'
import WrCard from '@/components/card'
import {
  PieEchart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart
} from '@/views/main/components/page-echart'

const store = useStore()
store.dispatch('dashboard/getDashboardDataAction')

const categoryGoodsCount = computed(() => {
  return store.state.dashboard.categoryGoodsCount.map((item) => {
    return { name: item.name, value: item.goodsCount }
  })
})

const categoryGoodsSale = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []

  const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
  for (const item of categoryGoodsSale) {
    xLabels.push(item.name)
    values.push(item.goodsCount)
  }
  return { xLabels, values }
})

const categoryGoodsFavor = computed(() => {
  const xLabels: string[] = []
  const values: any[] = []

  const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
  for (const item of categoryGoodsFavor) {
    xLabels.push(item.name)
    values.push(item.goodsFavor)
  }
  return { xLabels, values }
})

const addressGoodsSale = computed(() => {
  return store.state.dashboard.addressGoodsSale.map((item) => {
    return { name: item.address, value: item.count }
  })
})
</script>

<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <WrCard title="分类商品数量(饼图)">
          <PieEchart :pieData="categoryGoodsCount" />
        </WrCard>
      </el-col>
      <el-col :span="10">
        <WrCard title="不同城市商品销量">
          <MapEchart :mapData="addressGoodsSale" />
        </WrCard>
      </el-col>
      <el-col :span="7">
        <WrCard title="分类商品数量(玫瑰图)">
          <RoseEchart :roseData="categoryGoodsCount" />
        </WrCard>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="second-row">
      <el-col :span="12">
        <WrCard title="分类商品的销量">
          <LineEchart v-bind="categoryGoodsSale" />
        </WrCard>
      </el-col>
      <el-col :span="12">
        <WrCard title="分类商品的收藏">
          <BarEchart v-bind="categoryGoodsFavor" />
        </WrCard>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.dashboard {
  .second-row {
    margin-top: 10px;
  }
}
</style>
