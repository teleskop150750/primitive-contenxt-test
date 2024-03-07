<script setup lang="ts">
import { useDialogScope } from '../Alert/context'
import DialogContent from '../DialogContent/DialogContent.vue';
import type { Scope } from '../hooks/createContext'

const props = defineProps<{
  __scopeAlertDialog?: Scope
}>()

const dialogScope = useDialogScope(props.__scopeAlertDialog)
</script>

<template>
  <DialogContent v-bind="dialogScope">
    <slot />
  </DialogContent>
</template>
