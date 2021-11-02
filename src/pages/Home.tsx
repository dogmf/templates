import { Button, Modal } from 'antd'
import { FC, useCallback } from 'react'
import PageLayout from '../Layouts/PageLayout'
import { MyAppDatabase } from '../Utils/db'

type HomeProps = {}

const Home: FC<HomeProps> = (props) => {
  const dropHandler = useCallback(() => {
    Modal.confirm({
      title: 'Drop database and get default dataset?',
      onOk: async () => {
        let db = new MyAppDatabase()
        await db.delete()
      }
    })
  }, [])

  return (
    <PageLayout title="Home">
      <Button onClick={dropHandler}>Drop DB</Button>
    </PageLayout>
  )
}

export default Home
