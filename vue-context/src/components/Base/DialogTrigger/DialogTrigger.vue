<script setup lang="ts">
import { baseContext } from '../Dialog/context'

const { toggle, isOpen } = baseContext()!
</script>

<template>
  <div>
    <slot></slot>
    <button @click="toggle">{{ isOpen }}</button>
  </div>
</template>
