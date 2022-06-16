<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: ''
  },
  showSelectColumn: {
    type: Boolean,
    default: false
  },
  showIndexColumn: {
    type: Boolean,
    default: false
  },
  listData: {
    type: Array,
    required: true
  },
  propList: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['selectionChange'])

const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
}
</script>

<template>
  <div class="wr-tabel">
    <div class="wr-tabel-header">
      <slot name="header">
        <div class="wr-tabel-title">{{ title }}</div>
        <div class="wr-tabel-handler">
          <slot name="handler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="showSelectColumn"
        type="selection"
        align="center"
        width="60"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColumn"
        type="index"
        align="center"
        label="序号"
        width="60"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.prop">
        <el-table-column v-bind="propItem" align="center">
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="wr-tabel-footer">
      <slot name="footer">
        <el-pagination
          v-model:currentPage="currentPage4"
          v-model:page-size="pageSize4"
          :page-sizes="[100, 200, 300, 400]"
          :small="small"
          :disabled="disabled"
          :background="background"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </slot>
    </div>
  </div>
</template>

<style lang="less" scoped>
.wr-tabel {
  .wr-tabel-header,
  .wr-tabel-footer {
    display: flex;
  }

  .wr-tabel-header {
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .wr-tabel-footer {
    justify-content: end;
    margin-top: 10px;
  }
}
</style>
