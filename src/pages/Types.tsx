import { Button, Table, TableColumnType, TablePaginationConfig } from 'antd'
import { FC, useState } from 'react'
import { useQuery } from 'react-query'
import TypeCardModal from '../Components/Type/TypeCardModal'
import PageLayout from '../Layouts/PageLayout'
import { MyAppDatabase, TypeItem } from '../Utils/db'

type TypesProps = {}

const COLUMNS: TableColumnType<TypeItem>[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  }
]

const Types: FC<TypesProps> = (props) => {
  const [tableState, setTableState] = useState<TablePaginationConfig>({})
  const [createMode, setCreateMode] = useState(false)
  const [editingItemId, setEditingItemId] = useState<number | undefined>(
    undefined
  )

  const { data: types, isLoading: loading } = useQuery<TypeItem[]>(
    ['types', tableState],
    async () => {
      let db = new MyAppDatabase()
      return await db.types.toArray()
    }
  )

  return (
    <>
      <PageLayout
        title="Types"
        extra={
          <Button type="primary" onClick={() => setCreateMode(true)}>
            Add
          </Button>
        }
      >
        <Table
          loading={loading}
          dataSource={types}
          columns={COLUMNS}
          onChange={setTableState}
          onRow={({ id }) => ({
            onClick: () => setEditingItemId(id)
          })}
        />
      </PageLayout>
      <TypeCardModal
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

export default Types
