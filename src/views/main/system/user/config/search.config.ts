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
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入',
      otherOptions: {
        size: 'small'
      }
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入',
      otherOptions: {
        size: 'small'
      }
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入',
      otherOptions: {
        size: 'small'
      }
    },
    {
      field: 'sport',
      type: 'select',
      label: '下拉选择',
      placeholder: '请选择',
      options: [
        { value: 'op1', label: 'op1' },
        { value: 'op2', label: 'op2' }
      ],
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
