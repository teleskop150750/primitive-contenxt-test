import { type Ref } from 'vue'
import { createContextScope } from '../hooks/createContext'

export interface DialogContextValue {
  isOpen: Ref<boolean>
  toggle: () => void
}

const [createDialogContext, createDialogScope] = createContextScope('Dialog')

const [DialogProvider, useDialogContext] = createDialogContext<DialogContextValue>('Dialog');

export { DialogProvider, useDialogContext }

export { createDialogScope }
