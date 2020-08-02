<template>
  <div>
    <GlobalHeader />
    <main class="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import GlobalHeader from "~/components/organisms/GlobalHeader.vue";

export default {
  components: {
    GlobalHeader,
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 64px;
  min-height: 80vh;
}
</style>
