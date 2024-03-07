<script setup lang="ts">
import { ref } from 'vue';
import {  baseProvide } from './context'

const isOpen = ref(false)

baseProvide({
  isOpen,
  toggle: () => {
    isOpen.value = !isOpen.value
  }
})
</script>

<template>
  <slot></slot>
</template>
