export interface DefaultInputProps<T> {
  onChange?: (T) => void
  value?: T
}

export interface CardModalProps {
  id?: number
  onCancel: () => void
  visible: boolean
}
