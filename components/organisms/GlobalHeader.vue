<template>
  <header class="header-navigation">
    <small-sinbol />
    <ul class="header-navigation_links">
      <li class="header-navigation_links_item">
        <nuxt-link to="/">Top</nuxt-link>
      </li>
      <li class="header-navigation_links_item">
        <nuxt-link to="comsoon">Ranking</nuxt-link>
      </li>
      <li class="header-navigation_links_item">
        <nuxt-link to="comsoon">Status</nuxt-link>
      </li>
      <li class="header-navigation_links_item">
        <nuxt-link to="comsoon">Announce</nuxt-link>
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
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  background-color: $color-back;

  @include mq(md) {
    width: 100%;
    height: 100vh;
    top: 0;
    right: 0;
    z-index: 1;

    display: block;
    padding: 6px 12px;
  }

  &_links {
    display: flex;
    justify-content: center;
    @include mq(md) {
      flex-wrap: wrap;
    }
    &_item {
      padding: 0 20px;
      @include mq(md) {
        width: 100%;
      }
      & > a {
        color: $color-white;
        letter-spacing: 2px;
        font-size: $font-s;
        @include mq(md) {
          font-size: $font-m;
        }
      }
    }
  }
}
</style>
