import { DOMAttributes, FC } from 'react'

type TemplatedComponentContainerProps = DOMAttributes<{}> & {}

const TemplatedComponentContainer: FC<TemplatedComponentContainerProps> = (
  props
) => {
  return <div className="ant-card ant-card-bordered" {...props} />
}

export default TemplatedComponentContainer
