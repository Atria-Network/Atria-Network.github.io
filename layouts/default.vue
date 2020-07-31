<template>
  <div>
    <header-component />
    <Nuxt />
  </div>
</template>

<script>
import HeaderComponent from "~/layouts/header-component.vue";

export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style>
</style>
