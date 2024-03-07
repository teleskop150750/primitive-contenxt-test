<script setup lang="ts">
import { baseContext } from '../Dialog/context'

const { isOpen } = baseContext()!
</script>

<template>
  <div v-if="isOpen">
    <slot></slot>
  </div>
</template>
