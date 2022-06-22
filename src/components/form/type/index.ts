type FormItemType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: FormItemType
  label: string
  rules?: any[]
  placeholder?: string
  options?: any[]
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  title?: string
  labelWidth?: string
  itemStyle?: any
  colLayout?: any
  formItems: IFormItem[]
}
