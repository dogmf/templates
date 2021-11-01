import { Button, Result, Spin } from 'antd'
import { FC, useState } from 'react'
import { useQuery } from 'react-query'
import ObjectCardModal from '../Components/Object/ObjectCardModal'
import ObjectView from '../Components/Object/ObjectView'
import SpaceBlock from '../Components/SpaceBlock'
import PageLayout from '../Layouts/PageLayout'
import { MyAppDatabase, ObjectItem } from '../Utils/db'

type ObjectsProps = {}

const Objects: FC<ObjectsProps> = (props) => {
  const [createMode, setCreateMode] = useState(false)
  const [editingItemId, setEditingItemId] = useState<number | undefined>(
    undefined
  )

  const { data: objects, isLoading: loading } = useQuery<ObjectItem[]>(
    ['objects'],
    async () => {
      let db = new MyAppDatabase()
      return await db.objects.toArray()
    }
  )

  return (
    <>
      <PageLayout
        title="Objects"
        extra={
          <Button type="primary" onClick={() => setCreateMode(true)}>
            Add
          </Button>
        }
      >
        <Spin spinning={loading}>
          {objects ? (
            <ul className="app-list">
              {objects.map((object) => (
                <li key={object.id}>
                  <SpaceBlock>
                    <ObjectView data={object} />
                    <Button
                      type="link"
                      onClick={() => setEditingItemId(object.id)}
                    >
                      Edit
                    </Button>
                  </SpaceBlock>
                </li>
              ))}
            </ul>
          ) : (
            <Result title="no data" />
          )}
        </Spin>
      </PageLayout>
      <ObjectCardModal
        visible={!!(createMode || editingItemId)}
        onCancel={() => {
          setCreateMode(false)
          setEditingItemId(undefined)
        }}
        id={editingItemId}
      />
    </>
  )
}

export default Objects
