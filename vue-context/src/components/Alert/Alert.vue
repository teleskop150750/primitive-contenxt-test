<script setup lang="ts">
import { ref } from 'vue';
import type { Scope } from '../hooks/createContext';
import { useDialogScope } from './context';
import Dialog from '../Dialog/Dialog.vue';

const props = defineProps<{
  __scopeAlertDialog?: Scope
}>()


const dialogScope = useDialogScope(props.__scopeAlertDialog);
</script>

<template>
  <Dialog v-bind:="dialogScope">
    <slot></slot>
  </Dialog>
</template>
