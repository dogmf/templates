import { Layout, Menu } from 'antd'
import { FC } from 'react'
import { Link } from 'react-location'
import { PAGES } from '../App'

const { Content, Header } = Layout

type AppLayoutProps = {}

const AppLayout: FC<AppLayoutProps> = (props) => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key={'home'}>
            <Link to="/">Home</Link>
          </Menu.Item>
          {PAGES.map((page) => (
            <Menu.Item key={page.path}>
              <Link to={page.path}>{page.title}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
    </Layout>
  )
}

export default AppLayout
