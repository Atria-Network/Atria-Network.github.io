<template>
  <button class="primary-button" @click="$emit('click')">
    <slot>Primary Button</slot>
  </button>
</template>

<style lang="scss" scoped>
.primary-button {
  padding: 12px 40px;
}
</style>
