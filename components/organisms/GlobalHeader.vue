<template>
  <header class="header-navigation">
    <small-sinbol />
    <ul class="header-navigation_links">
      <li class="header-navigation_links_item">
        <nuxt-link to="howto">How to play</nuxt-link>
      </li>
      <li class="header-navigation_links_item">
        <nuxt-link to="howto">Ranking</nuxt-link>
      </li>
      <li class="header-navigation_links_item">
        <nuxt-link to="howto">Status</nuxt-link>
      </li>
      <li class="header-navigation_links_item">
        <nuxt-link to="howto">Announce</nuxt-link>
      </li>
    </ul>
  </header>
</template>

<script>
import SmallSinbol from "~/components/molecules/sinbol/SmallSinbol.vue";
export default {};
</script>

<style lang="scss" scoped>
.header-navigation {
  width: 100%;
  height: 64px;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  background-color: $color-back;

  @include mq(md) {
    padding: 0 8px;
  }

  &_links {
    display: flex;
    justify-content: center;
    &_item {
      padding: 0 20px;
      & > a {
        color: $color-white;
        letter-spacing: 2px;
        font-size: $font-s;
      }
    }
  }
}
</style>
