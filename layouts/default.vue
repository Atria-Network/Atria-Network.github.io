<template>
  <div>
    <HeaderNavigation />
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import HeaderNavigation from "~/components/organisms/HeaderNavigation.vue";

export default {
  components: {
    HeaderNavigation,
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 64px;
  min-height: 80vh;
}
</style>
