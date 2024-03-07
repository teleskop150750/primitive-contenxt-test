<script setup lang="ts">
import { useDialogScope } from '../Alert/context'
import DialogTrigger from '../DialogTrigger/DialogTrigger.vue';
import type { Scope } from '../hooks/createContext'

const props = defineProps<{
  __scopeAlertDialog?: Scope
}>()

const dialogScope = useDialogScope(props.__scopeAlertDialog)
</script>

<template>
  <DialogTrigger v-bind="dialogScope">
    <slot />
  </DialogTrigger>
</template>
