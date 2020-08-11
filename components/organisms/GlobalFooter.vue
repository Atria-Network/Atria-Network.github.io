<style lang="scss" scoped>
.global-footer {
  width: 100%;
  height: 350px;
  background-color: $color-back;
  color: $color-white;
  padding: 60px 0;
  &_wrap {
    max-width: 840px;
    margin: 0 auto;
  }
  &_navigate {
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    &_item {
      padding: 0 20px;
    }
  }

  &_copyright {
    display: block;
    text-align: center;
    color: $color-gray;
  }
}
</style>

<template>
  <footer class="global-footer">
    <div class="global-footer_wrap">
      <SmallSinbol />
      <ul class="global-footer_navigate">
        <li>
          <nuxt-link to="/">TOP</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">TOP</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">TOP</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">TOP</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/">TOP</nuxt-link>
        </li>
      </ul>
      <span class="global-footer_copyright">Copyright 2020 Atria Network.</span>
    </div>
  </footer>
</template>

<script>
import SmallSinbol from "~/components/molecules/sinbol/SmallSinbol.vue";
export default {
  components: {
    SmallSinbol,
  },
};
</script>
