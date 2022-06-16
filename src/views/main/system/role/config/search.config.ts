import { IForm } from '@/components/form'

export const searchFormConfig: IForm = {
  labelWidth: '80px',
  itemStyle: { padding: '0 10px' },
  colLayout: {
    xl: 6,
    lg: 6,
    md: 8,
    sm: 12,
    xs: 24
  },
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称',
      otherOptions: {
        size: 'small'
      }
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍',
      otherOptions: {
        size: 'small'
      }
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange',
        size: 'small'
      }
    }
  ]
}
