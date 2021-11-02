import { Button, message, Modal } from 'antd'
import { FC, useCallback } from 'react'
import PageLayout from '../Layouts/PageLayout'
import { MyAppDatabase } from '../Utils/db'

type HomeProps = {}

const Home: FC<HomeProps> = (props) => {
  const dropHandler = useCallback(() => {
    Modal.confirm({
      title: 'Reset database and get default dataset?',
      onOk: async () => {
        let db = new MyAppDatabase()
        try {
          await db.delete()
          message.success('Database was reset')
        } catch (err) {
          Modal.error({
            title: 'Database was not reset',
            content: (err as Error).toString()
          })
        }
      }
    })
  }, [])

  return (
    <PageLayout title="Home">
      <Button onClick={dropHandler}>Reset DB</Button>
    </PageLayout>
  )
}

export default Home
