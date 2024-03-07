<script setup lang="ts">
import { useDialogContext } from '../Dialog/context'
import type { Scope } from '../hooks/createContext'

const props = defineProps<{
  __scopeDialog?: Scope
}>()

const { isOpen } = useDialogContext('DialogContent', props.__scopeDialog)
</script>

<template>
  <div v-if="isOpen">
    <slot></slot>
  </div>
</template>
