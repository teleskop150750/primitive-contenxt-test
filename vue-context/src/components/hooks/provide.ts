import type { InjectionKey } from 'vue'
import { inject, provide } from 'vue'

export interface CreateInjectionStateOptions<Return> {
  /**
   * Custom injectionKey for InjectionState
   */
  injectionKey?: string | InjectionKey<Return>
}

/**
 * Create global state that can be injected into components.
 *
 * @see https://vueuse.org/createInjectionState
 *
 */
export function createInjectionState<Arguments extends Array<any>, Return>(
  composable: (...args: Arguments) => Return,
  options?: CreateInjectionStateOptions<Return>,
): readonly [useProvidingState: (...args: Arguments) => Return, useInjectedState: () => Return | undefined] {
  const key: string | InjectionKey<Return> = options?.injectionKey || Symbol(composable.name || 'InjectionState')

  const useProvidingState = (...args: Arguments) => {
    const state = composable(...args)
    provide(key, state)
    return state
  }

  const useInjectedState = () => inject(key)
  return [useProvidingState, useInjectedState]
}
