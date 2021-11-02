import { FormInstance, Form, Input } from 'antd'
import { FC } from 'react'
import JSONInput from '../Inputs/JSONInput'
import { templateValidator } from '../Template/template.helpers'
import TemplateInput from '../Template/TemplateInput'

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
        name="defaults"
        label="Defaults"
        rules={[{ required: true }]}
        initialValue={{}}
      >
        <JSONInput />
      </Form.Item>
      <Form.Item
        label="Template"
        shouldUpdate={(prevValue, newValue) =>
          prevValue['defaults'] !== newValue['defaults']
        }
      >
        {(form) => {
          let example = form.getFieldValue('defaults')
          return (
            <Form.Item
              name="template"
              rules={[
                {
                  required: true,
                  validator: templateValidator
                }
              ]}
              initialValue=""
            >
              <TemplateInput width="600px" example={example} />
            </Form.Item>
          )
        }}
      </Form.Item>
    </Form>
  )
}

export default TypeForm
