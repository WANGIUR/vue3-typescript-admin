export const contentTableConfig = {
  title: '用户列表',
  handlerBtnName: '新增',
  handlerBtnIcon: 'Plus',
  propList: [
    {
      prop: 'name',
      label: '用户名',
      minWidth: '100',
      slotName: 'name'
    },
    {
      prop: 'realname',
      label: '真实姓名',
      minWidth: '150',
      slotName: 'realname'
    },
    {
      prop: 'cellphone',
      label: '手机号码',
      minWidth: '120',
      slotName: 'cellphone'
    },
    {
      prop: 'enable',
      label: '状态',
      minWidth: '80',
      slotName: 'enable'
    },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '180',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '180',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '140',
      slotName: 'operate'
    }
  ],
  showIndexColumn: true,
  showSelectColumn: true
}
