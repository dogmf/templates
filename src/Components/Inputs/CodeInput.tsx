import { FC } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import { DefaultInputProps } from '../../App.types'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/jsx/jsx'

type CodeInputProps = DefaultInputProps<string> & {
  options?: any
}

const CodeInput: FC<CodeInputProps> = (props) => {
  let { value, onChange, ...otherProps } = props
  return (
    <CodeMirror
      value={value || ''}
      onBeforeChange={(editor, data, value) => onChange?.(value)}
      {...otherProps}
    />
  )
}

export default CodeInput
