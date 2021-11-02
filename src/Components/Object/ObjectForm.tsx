import { FC } from 'react'
import { FormInstance, Form, Input } from 'antd'
import JSONInput from '../Inputs/JSONInput'

type ObjectFormProps = {
  form: FormInstance
}

const ObjectForm: FC<ObjectFormProps> = (props) => {
  let { form } = props
  return (
    <Form form={form}>
      <Form.Item name="label" label="Label">
        <Input />
      </Form.Item>
      <Form.Item name="data" label="data" noStyle initialValue="">
        <JSONInput />
      </Form.Item>
    </Form>
  )
}

export default ObjectForm
