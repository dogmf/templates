import { Modal, Form, message, Button, Spin } from 'antd'
import { FC, useCallback, useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { CardModalProps } from '../../App.types'
import { MyAppDatabase } from '../../Utils/db'
import SpaceBlock from '../SpaceBlock'
import ObjectForm from './ObjectForm'

const ObjectCardModal: FC<CardModalProps> = (props) => {
  let { visible, id, onCancel } = props

  const queryClient = useQueryClient()
  const { data: objectData, isLoading: loading } = useQuery(
    ['objects', id],
    async () => {
      if (id) {
        const db = new MyAppDatabase()
        return await db.objects.get(id)
      }
    },
    { enabled: !!id }
  )

  const [form] = Form.useForm()
  useEffect(() => {
    if (objectData) form.setFieldsValue(objectData)
    else form.resetFields()
  }, [objectData, form])

  const { mutate: saveObject, isLoading: saving } = useMutation(
    async () => {
      const db = new MyAppDatabase()
      await form.validateFields()
      let data = form.getFieldsValue()
      console.log({ id, data })
      if (id) {
        return await db.objects.update(id, data)
      } else {
        return await db.objects.add(data)
      }
    },
    {
      onSuccess: () => {
        message.success('saved')
        queryClient.invalidateQueries(['objects'])
        onCancel()
      },
      onError: (error: Error) => {
        message.error(error.toString())
      }
    }
  )

  const { mutate: deleteObject, isLoading: deleting } = useMutation(
    async () => {
      if (id) {
        const db = new MyAppDatabase()
        return await db.objects.delete(id)
      }
    },
    {
      onSuccess: () => {
        message.success('deleted')
        queryClient.invalidateQueries(['objects'])
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
        deleteObject()
      }
    })
  }, [deleteObject])

  return (
    <Modal
      visible={visible}
      title="Object"
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
              onClick={saveObject as () => void}
              type="primary"
              disabled={loadingState}
            >
              save
            </Button>
          </SpaceBlock>
        </Spin>
      }
    >
      <ObjectForm form={form} />
    </Modal>
  )
}

export default ObjectCardModal
