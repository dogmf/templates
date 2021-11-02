import { FC } from 'react'
import { DefaultInputProps } from '../../App.types'
import AceEditor, { IAceEditorProps } from 'react-ace'

import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/mode-handlebars'
import 'ace-builds/src-noconflict/theme-github'

export type CodeInputProps = DefaultInputProps<string> & IAceEditorProps

const CodeInput: FC<CodeInputProps> = (props) => {
  return <AceEditor {...props} />
}

export default CodeInput
