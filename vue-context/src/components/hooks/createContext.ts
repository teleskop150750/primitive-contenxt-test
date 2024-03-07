import type { InjectionKey, PropType } from 'vue'
import { inject, provide } from 'vue'

export type Scope<C = any> = { [scopeName: string]: [InjectionKey<C>, C][] } | undefined

type ScopeHook = (scope: Scope) => { [__scopeProp: string]: Scope }
interface CreateScope {
  scopeName: string
  (): ScopeHook
}

function createContextScope<T extends string>(scopeName: T, createContextScopeDeps: CreateScope[] = []) {
  let defaultContexts: any[] = []
  /* -----------------------------------------------------------------------------------------------
   * createContext
   * --------------------------------------------------------------------------------------------- */

  function createContext<ContextValueType extends object | null>(
    rootComponentName: string,
    defaultContext?: ContextValueType,
  ) {
    const BaseContextKey: InjectionKey<ContextValueType | null> = Symbol(rootComponentName)
    const index = defaultContexts.length
    defaultContexts = [...defaultContexts, defaultContext]

    function useProvider(
      props: ContextValueType & { scope: Scope<ContextValueType> | undefined },
    ) {
      const { scope, ...context } = props
      // TODO:
      // const { scope, ...context } = toRefs(props)
      // OR
      // const { scope } = props
      // delete props.scope

      const [ContextKey] = scope?.[scopeName][index] || [BaseContextKey, undefined]

      provide(ContextKey, context as any)
    }

    function useContext(consumerName: string, scope: Scope<ContextValueType | undefined>): ContextValueType {
      const [ContextKey, ContextDefault] = scope?.[scopeName]?.[index] || [BaseContextKey, undefined]
      const context = inject(ContextKey)

      if (context)
        return context

      if (ContextDefault !== undefined)
        return ContextDefault

      if (defaultContext !== undefined)
        return defaultContext

      // // if a defaultProvide wasn't specified, it's a required provide.
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)
    }

    /**
     * [useNameProvide, useNameInject]
     */
    return [
      useProvider,
      useContext,
    ] as const
  }

  /* -----------------------------------------------------------------------------------------------
   * createScope
   * --------------------------------------------------------------------------------------------- */
  const createScope: CreateScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return [Symbol(scopeName), defaultContext] as [InjectionKey<T>, any]
    })

    return function useScope(scope: Scope) {
      const providers = scope?.[scopeName] || scopeContexts

      return ({
        [`__scope${scopeName}`]: {
          ...scope,
          [scopeName]: providers,
        },
      })
    }
  }

  createScope.scopeName = scopeName

  /**
   * [createNameProvide, createNameScope]
   */
  return [
    createContext,
    composeScopes(createScope, ...createContextScopeDeps),
  ] as const
}

function composeScopes(...scopes: CreateScope[]) {
  const baseScope = scopes[0]
  if (scopes.length === 1)
    return baseScope

  const createScope: CreateScope = () => {
    const scopeHooks = scopes.map((createScope) => {
      return ({
        useScope: createScope(),
        scopeName: createScope.scopeName,
      })
    })
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes, { useScope, scopeName }) => {
        // We are calling a hook inside a callback which React warns against to avoid inconsistent
        // renders, however, scoping doesn't have render side effects so we ignore the rule.
        const scopeProps = useScope(overrideScopes)
        const currentScope = scopeProps[`__scope${scopeName}`]

        return { ...nextScopes, ...currentScope }
      }, {})

      return ({ [`__scope${baseScope.scopeName}`]: nextScopes })
    }
  }

  createScope.scopeName = baseScope.scopeName
  return createScope
}

export const ScopePropObject = {
  type: Object as unknown as PropType<Scope>,
  required: false,
}

export { createContextScope }
export type { CreateScope }
