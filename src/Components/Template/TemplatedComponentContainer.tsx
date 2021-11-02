import { Card } from 'antd'
import { DOMAttributes, FC } from 'react'

type TemplatedComponentContainerProps = DOMAttributes<{}> & {}

const TemplatedComponentContainer: FC<TemplatedComponentContainerProps> = (
  props
) => {
  return (
    <div
      style={{ border: '1px dashed red', borderRadius: '.5em' }}
      {...props}
    />
  )
}

export default TemplatedComponentContainer
