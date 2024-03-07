<script setup lang="ts">
import { useDialogContext } from '../Dialog/context'
import type { Scope } from '../hooks/createContext'

const props = defineProps<{
  __scopeDialog?: Scope
}>()

const { toggle, isOpen } = useDialogContext('DialogTrigger', props.__scopeDialog)
</script>

<template>
  <div>
    <slot></slot>
    <button @click="toggle">{{ isOpen }}</button>
  </div>
</template>
