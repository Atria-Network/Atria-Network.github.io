<template>
  <header class="l-header">
    <div class="l-header_logo">
      <img class="l-header_logo_img" src="/img/icon.png" />
      <span class="l-header_logo_atria">Atria Network</span>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.l-header {
  width: 100%;
  height: 72px;
  background-color: $color-black;
  border-left: 40px solid $color-back;
  border-right: 40px solid $color-back;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  &_logo {
    line-height: 72px;
    vertical-align: -webkit-baseline-middle;
    &_img {
      display: inline-block;
      width: 52px;
      padding-bottom: 10px;
    }
    &_atria {
      color: $color-white;
      font-size: $font-m;
      letter-spacing: 2px;
    }
  }
  &_nav {
  }
}
</style>
