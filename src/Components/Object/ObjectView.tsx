import { FC } from 'react'
import { ObjectItem } from '../../Utils/db'
import TemplatedComponent from '../Template/TemplatedComponent'
import { useSingleTypeQuery } from '../Type/TypeQuery'

type ObjectViewProps = {
  data: ObjectItem
}

const ObjectView: FC<ObjectViewProps> = (props) => {
  let { data } = props
  let { data: type } = useSingleTypeQuery(data.type)
  return <TemplatedComponent template={type?.template} data={data} />
}

export default ObjectView
