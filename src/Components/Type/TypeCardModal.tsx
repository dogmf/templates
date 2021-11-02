import { Modal, Form, message, Button, Spin } from 'antd'
import { FC, useCallback, useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { CardModalProps } from '../../App.types'
import { MyAppDatabase } from '../../Utils/db'
import SpaceBlock from '../SpaceBlock'
import TypeForm from './TypeForm'

const TypeCardModal: FC<CardModalProps> = (props) => {
  let { visible, id, onCancel } = props

  const queryClient = useQueryClient()
  const { data: typeData, isLoading: loading } = useQuery(
    ['types', id],
    async () => {
      if (id) {
        const db = new MyAppDatabase()
        return await db.types.get(id)
      }
    },
    { enabled: !!id }
  )

  const [form] = Form.useForm()
  useEffect(() => {
    if (typeData) form.setFieldsValue(typeData)
    else form.resetFields()
  }, [typeData, form])

  const { mutate: saveType, isLoading: saving } = useMutation(
    async () => {
      const db = new MyAppDatabase()
      await form.validateFields()
      let data = form.getFieldsValue()
      if (id) return await db.types.update(id, data)
      else return await db.types.add(data)
    },
    {
      onSuccess: () => {
        message.success('saved')
        queryClient.invalidateQueries(['types'])
        onCancel()
      },
      onError: (error: Error) => {
        message.error(error.toString())
      }
    }
  )

  const { mutate: deleteType, isLoading: deleting } = useMutation(
    async () => {
      if (id) {
        const db = new MyAppDatabase()
        return await db.types.delete(id)
      }
    },
    {
      onSuccess: () => {
        message.success('deleted')
        queryClient.invalidateQueries(['types'])
        onCancel()
      },
      onError: (error: Error) => {
        message.error(error.toString())
      }
    }
  )

  let loadingState = loading || saving || deleting

  const deleteHandler = useCallback(() => {
    Modal.confirm({
      title: 'delete object?',
      onOk: () => {
        deleteType()
      }
    })
  }, [deleteType])

  return (
    <Modal
      visible={visible}
      title="Type"
      width="720px"
      onCancel={onCancel}
      footer={
        <Spin spinning={loadingState}>
          <SpaceBlock>
            {id && (
              <Button
                onClick={deleteHandler}
                type="dashed"
                danger
                disabled={loadingState}
              >
                delete
              </Button>
            )}
            <Button style={{ marginLeft: 'auto' }} onClick={onCancel}>
              cancel
            </Button>
            <Button
              onClick={saveType as () => void}
              type="primary"
              disabled={loadingState}
            >
              save
            </Button>
          </SpaceBlock>
        </Spin>
      }
    >
      <TypeForm form={form} />
    </Modal>
  )
}

export default TypeCardModal
