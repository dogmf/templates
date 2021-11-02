import { FC, useMemo } from 'react'
import { FormInstance, Form, Input, Select } from 'antd'
import JSONInput from '../Inputs/JSONInput'
import { DefaultInputProps } from '../../App.types'
import { useTypeQuery } from '../Type/TypeQuery'

type ObjectFormProps = {
  form: FormInstance
}

const SelectType: FC<DefaultInputProps<string>> = (props) => {
  const { data: types } = useTypeQuery()

  const options = useMemo(() => {
    if (!types) return []
    else return types.map((type) => ({ value: type.name, label: type.name }))
  }, [types])

  return <Select options={options || []} {...props} />
}

const ObjectForm: FC<ObjectFormProps> = (props) => {
  let { form } = props
  return (
    <Form form={form}>
      <Form.Item name="label" label="Label" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="type"
        label="Type"
        initialValue=""
        rules={[{ required: true }]}
      >
        <SelectType />
      </Form.Item>
      <Form.Item name="data" label="data" initialValue={{}}>
        <JSONInput />
      </Form.Item>
    </Form>
  )
}

export default ObjectForm
