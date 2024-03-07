import { type Ref } from 'vue'
import { createInjectionState } from '../../hooks/provide'

export interface DialogContextValue {
  isOpen: Ref<boolean>
  toggle: () => void
}

const [baseProvide, baseContext] = createInjectionState((props: DialogContextValue) => props)

export { baseProvide, baseContext }
