import { PageHeader, PageHeaderProps } from 'antd'
import { FC } from 'react'

type PageLayoutProps = PageHeaderProps

const PageLayout: FC<PageLayoutProps> = (props) => {
  let { children, ...otherProps } = props
  return (
    <div>
      <PageHeader {...otherProps} />
      {children}
    </div>
  )
}

export default PageLayout
