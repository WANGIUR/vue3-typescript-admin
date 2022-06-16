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
      label: '用户id',
      placeholder: '请输入用户id',
      otherOptions: {
        size: 'small'
      }
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名',
      otherOptions: {
        size: 'small'
      }
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名',
      otherOptions: {
        size: 'small'
      }
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码',
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
