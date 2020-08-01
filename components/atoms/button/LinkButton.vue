<template>
  <a class="link-button" v-if="href" :href="href">
    <slot />
  </a>
  <nuxt-link class="link-button" v-else :to="to">
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    href: String,
    to: String,
  },
};
</script>

<style lang="scss" scoped>
.link-button {
  display: inline-block;
  font-size: $font-m;
  padding: 12px 40px;
  background-color: $color-orange;
  color: $color-white;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.08);
  }
}
</style>
