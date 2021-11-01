import { FC } from 'react'

type SpaceBlockProps = {}

const SpaceBlock: FC<SpaceBlockProps> = (props) => {
  const { children } = props
  return <div style={{ display: 'flex' }}>{children}</div>
}

export default SpaceBlock
