import { Button, Modal, Space } from 'antd'
import { FC, useCallback, useEffect, useState } from 'react'
import CodeInput, { CodeInputProps } from '../Inputs/CodeInput'
import { validateTemplate } from './template.helpers'
import TemplatedComponent from './TemplatedComponent'

type TemplateInputProps = CodeInputProps & {
  example: any
}

const TemplateInput: FC<TemplateInputProps> = (props) => {
  const { onChange, value = '', example } = props
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [localValue, setLocalValue] = useState<string>(value)
  useEffect(() => {
    setLocalValue(value)
  }, [value, modalIsOpen])
  const applyHandler = useCallback(() => {
    try {
      validateTemplate(localValue)
      onChange?.(localValue)
      setModalIsOpen(false)
    } catch (err) {}
  }, [localValue, onChange])
  const cancelHandler = useCallback(() => {
    setModalIsOpen(false)
  }, [])
  return (
    <>
      <Space direction="vertical">
        <TemplatedComponent template={value} data={example} />
        <Button onClick={() => setModalIsOpen(true)}>Edit</Button>
      </Space>
      <Modal
        title="Template Editor"
        visible={modalIsOpen}
        onCancel={cancelHandler}
        onOk={applyHandler}
        width="800px"
      >
        <Space direction="vertical">
          <TemplatedComponent template={localValue} data={example} />
          <CodeInput
            value={localValue}
            onChange={setLocalValue}
            mode="handlebars"
            width="700px"
          />
        </Space>
      </Modal>
    </>
  )
}

export default TemplateInput
