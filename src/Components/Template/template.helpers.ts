import { compile } from 'handlebars'
import { RuleObject } from 'rc-field-form/lib/interface'

export const templateValidator = async (
  _: RuleObject,
  template: string
): Promise<void> => {
  try {
    validateTemplate(template)
  } catch (err) {
    throw new Error('template is not correct')
  }
}

export const validateTemplate = (template: string) => {
  compile(template)({})
  return true
}
