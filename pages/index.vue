<template>
  <div class="container">
    <img class="background" src="/img/background.png" />
    <article class="visual">
      <div class="visual_wrap">
        <img class="visual_icon" src="/img/icon.png" />
        <p class="visual_play">
          Play with
          <span class="visual_onlines" data-playercounter-ip="play.atria.network"></span>
          on
          <u>play.atria.network</u>
        </p>
        <nuxt-link class="button--basic" to="/top">Let's Play</nuxt-link>
      </div>
    </article>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.background {
  position: fixed;
  top: 72px;
  left: 0;
  width: 100%;
  height: calc(100vh - 72px);
  z-index: -1;
}

.container {
  position: relative;
}

.visual {
  width: $site-width;
  height: calc(100vh - 72px);
  margin: 0px auto;

  &_wrap {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-weight: 400;
  }
  &_icon {
    width: 160px;
    height: 160px;
    margin-bottom: 16px;
  }
  &_play {
    font-size: $font-l;
    color: $color-white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 16px;
  }
  &_onlines {
    font-size: $font-xl;
    color: #16ff64;
  }
}
</style>
