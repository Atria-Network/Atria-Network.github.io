<template>
  <header class="header-navigation">
    <small-sinbol />
    <input type="checkbox" class="header-navigation_check" id="toggler" v-model="toggle" />
    <label class="header-navigation_toggle" for="toggler">
      <font-awesome-icon :icon="['fa', 'bars']" />
    </label>
    <div class="header-navigation_wrap">
      <label class="header-navigation_toggle" for="toggler">
        <font-awesome-icon :icon="['fa', 'times']" />
      </label>
      <ul class="header-navigation_links">
        <li class="header-navigation_links_item">
          <nuxt-link @click.native="toggleNavigate" to="/">Top</nuxt-link>
        </li>
        <li class="header-navigation_links_item">
          <nuxt-link @click.native="toggleNavigate" to="/user">Status</nuxt-link>
        </li>
        <li class="header-navigation_links_item">
          <nuxt-link @click.native="toggleNavigate" to="/comsoon">Ranking</nuxt-link>
        </li>

        <li class="header-navigation_links_item">
          <nuxt-link @click.native="toggleNavigate" to="/comsoon">Announce</nuxt-link>
        </li>
        <li class="header-navigation_links_item">
          <a @click="toggleNavigate" href="http://store.atria.network/">Donate</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import SmallSinbol from "~/components/molecules/sinbol/SmallSinbol.vue";
export default {
  data: function () {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleNavigate() {
      this.toggle = !this.toggle;
    },
  },
};
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
    top: 0;
    left: 0;
    z-index: 1;
    padding: 0 12px;
  }
  &_check {
    display: none;
  }
  &_toggle {
    width: 64px;
    height: 64px;
    line-height: 64px;
    text-align: center;
    color: $color-white;
    font-size: $font-xl;
    position: absolute;
    top: 0;
    right: 0;
    display: none;

    @include mq(md) {
      display: block;
    }
  }
  &_wrap {
    background-color: $color-back;
    @include mq(md) {
      position: absolute;
      top: 0;
      right: 0;
      transform: translateX(100%);
      height: 100vh;
      width: 100%;
      padding: 64px 32px;
      transition: all 0.35s;
    }
  }
  &_links {
    display: inline-flex;
    justify-content: center;
    flex-wrap: nowrap;
    @include mq(md) {
      flex-wrap: wrap;
    }
    &_item {
      padding: 0 20px;

      @include mq(md) {
        width: 100%;
        padding: 20px;
        text-align: right;
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

#toggler:checked ~ .header-navigation_wrap {
  transform: translateX(0);
}
</style>
