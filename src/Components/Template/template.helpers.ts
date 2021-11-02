import H, { compile } from 'handlebars'
import { RuleObject } from 'rc-field-form/lib/interface'

H.registerHelper('eq', function (value, value2) {
  return value === value2
})

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
