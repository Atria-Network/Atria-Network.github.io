<template>
  <div>
    <GlobalHeader />
    <main class="main">
      <Nuxt />
    </main>
    <GlobalFooter />
  </div>
</template>

<script>
import GlobalHeader from "~/components/organisms/GlobalHeader.vue";
import GlobalFooter from "~/components/organisms/GlobalFooter.vue";

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
  },
};
</script>

<style lang="scss" scoped>
.main {
  margin-top: 64px;
  min-height: 80vh;
  @include mq(md) {
    margin-top: 0;
    min-height: 100vh;
  }
}
</style>
