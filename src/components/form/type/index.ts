type FormItemType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: FormItemType
  label: string
  rules?: any[]
  placeholder?: string
  options?: any[]
  otherOptions?: any
}

export interface IForm {
  labelWidth: string
  itemStyle?: any
  colLayout?: any
  formItems?: IFormItem[]
}
