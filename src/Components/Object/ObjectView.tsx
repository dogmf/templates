import { FC } from 'react'
import { ObjectItem } from '../../Utils/db'

type ObjectViewProps = {
  data: ObjectItem
}

const ObjectView: FC<ObjectViewProps> = (props) => {
  let { data, ...otherProps } = props
  return (
    <div
      {...otherProps}
      style={{
        padding: '2em',
        backgroundColor: 'rgba(0,100,230,.1)',
        borderRadius: '.3em'
      }}
    >
      {JSON.stringify(data)}
    </div>
  )
}

export default ObjectView
