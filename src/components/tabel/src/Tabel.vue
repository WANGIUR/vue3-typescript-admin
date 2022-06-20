<script setup lang="ts">
const props = defineProps({
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
  listCount: {
    type: Number,
    default: 0
  },
  propList: {
    type: Array,
    required: true
  },
  page: {
    type: Object,
    default: () => ({ currentPage: 0, pageSize: 10 })
  }
})

const emit = defineEmits(['selectionChange', 'update:page'])

const handleSelectionChange = (value: any) => {
  emit('selectionChange', value)
}

const handleSizeChange = (pageSize: number) => {
  emit('update:page', { ...props.page, pageSize })
}

const handleCurrentChange = (currentPage: number) => {
  emit('update:page', { ...props.page, currentPage })
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
        <el-table-column v-bind="propItem" align="center" show-overflow-tooltip>
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
          :current-page="page.currentPage"
          :page-size="page.pageSize"
          :page-sizes="[5, 10, 20, 40]"
          small
          :disabled="false"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
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
