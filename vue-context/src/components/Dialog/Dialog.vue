<script setup lang="ts">
import { ref } from 'vue';
import { DialogProvider } from './context'
import type { Scope } from '../hooks/createContext';

const props = defineProps<{
  __scopeDialog?: Scope
}>()

const isOpen = ref(false)

DialogProvider({
  scope: props.__scopeDialog,
  isOpen,
  toggle: () => {
    isOpen.value = !isOpen.value
  }
})
</script>

<template>
  <slot></slot>
</template>
