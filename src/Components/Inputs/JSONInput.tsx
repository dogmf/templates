import { Button, Modal } from 'antd'
import { FC, useCallback, useEffect, useState } from 'react'
import { DefaultInputProps } from '../../App.types'
import CodeInput from './CodeInput'

const stringify = (object: Object) => JSON.stringify(object, undefined, '  ')

const JSONInput: FC<DefaultInputProps<Object>> = (props) => {
  const { onChange, value = {} } = props
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)
  const [localValue, setLocalValue] = useState<string>(stringify(value))
  const [error, setError] = useState<Error | null>(null)
  useEffect(() => {
    setLocalValue(stringify(value))
  }, [value])
  const applyHandler = useCallback(() => {
    let error = null
    try {
      let objValue = JSON.parse(localValue)
      onChange?.(objValue)
      setModalIsOpen(false)
    } catch (err) {
      error = err as Error
    }
    setError(error)
  }, [localValue, onChange])
  const cancelHandler = useCallback(() => {
    setModalIsOpen(false)
    setError(null)
  }, [])
  return (
    <>
      <Button onClick={() => setModalIsOpen(true)}>Edit</Button>
      <Modal
        title="JSON Editor"
        visible={modalIsOpen}
        onOk={applyHandler}
        onCancel={cancelHandler}
        width="800px"
      >
        {error && <code>{error.toString()}</code>}
        <CodeInput
          value={localValue}
          onChange={setLocalValue}
          mode="json"
          width="700px"
        />
      </Modal>
    </>
  )
}

export default JSONInput
