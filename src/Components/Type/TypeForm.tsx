import { FormInstance, Form, Input } from 'antd'
import { FC } from 'react'
import CodeInput from '../Inputs/CodeInput'

type TypeFormProps = {
  form: FormInstance
}

const TypeForm: FC<TypeFormProps> = (props) => {
  const { form } = props
  return (
    <Form form={form}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        name="template"
        label="Template"
        rules={[{ required: true }]}
        noStyle
      >
        <CodeInput options={{ lineNumbers: true, mode: 'jsx' }} />
      </Form.Item>
    </Form>
  )
}

export default TypeForm
