import { ComponentType, DOMAttributes, FC, useMemo } from 'react'
import { compile } from 'handlebars'
import TemplatedComponentContainer from './TemplatedComponentContainer'

type Container = ComponentType<DOMAttributes<'div'>>

type TemplatedComponentProps = {
  template?: string
  data?: any
  container?: Container
}

const TemplatedComponent: FC<TemplatedComponentProps> = (props) => {
  const { template, data, container } = props

  const parsedData = useMemo(() => {
    let r = data
    if (typeof data === 'string')
      try {
        r = JSON.parse(data)
      } catch (error) {}
    return r
  }, [data])

  const templater = useMemo(() => {
    if (template) return compile(template)
  }, [template])

  const templatedData = useMemo(() => {
    try {
      if (!templater) throw new Error('no template')
      let C: Container = container || TemplatedComponentContainer
      return <C dangerouslySetInnerHTML={{ __html: templater(parsedData) }} />
    } catch (err) {
      return (
        <div style={{ display: 'block', color: 'red' }}>
          {(err as Error).toString()}
        </div>
      )
    }
  }, [templater, parsedData, container])

  return templatedData
}

export default TemplatedComponent
