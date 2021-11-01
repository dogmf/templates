import { FormInstance, Form, Input } from 'antd'
import { FC } from 'react'

type TypeFormProps = {
  form: FormInstance
}

const TypeForm: FC<TypeFormProps> = (props) => {
  const { form } = props
  return (
    <Form form={form} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="template" label="Template" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </Form>
  )
}

export default TypeForm
