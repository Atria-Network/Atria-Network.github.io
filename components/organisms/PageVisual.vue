<style lang="scss" scoped>
.page-visual {
  width: 100%;
  height: 200px;
  position: relative;

  &_background {
    width: 100%;
    height: 200px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  &_title {
    position: absolute;
    bottom: 30px;
    width: 100%;
    text-align: center;
    font-size: $font-cap;
    font-weight: bold;
    color: $color-white;
    text-shadow: 0 3px 4px;
    text-shadow: 0px 3px 3px #00000023;
  }
}
</style>

<template>
  <div class="main_wrap">
    <div class="page-visual">
      <img class="page-visual_background" src="/img/background.jpg" />
      <h1 class="page-visual_title">
        <slot />
      </h1>
    </div>
  </div>
</template>

<script>
export default {};
</script>
