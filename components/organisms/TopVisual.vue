<template>
  <article class="top-visual">
    <img class="top-visual_background" src="/img/background.jpg" />
    <div class="top-visual_wrap">
      <img class="top-visual_icon" src="/img/icon.png" />
      <div class="top-visual_status pb-40">
        <span class="top-visual_status_players pb-20">Play with ~~ players on</span>
        <span class="top-visual_status_ip">play.atria.network</span>
      </div>
      <PrimaryButton to="howto">Let't Play</PrimaryButton>
    </div>
  </article>
</template>

<script>
import SmallSinbol from "~/components/molecules/sinbol/SmallSinbol.vue";
import PrimaryButton from "~/components/atoms/button/PrimaryButton.vue";
export default {
  components: {
    SmallSinbol,
  },
};
</script>

<style lang="scss" scoped>
.top-visual {
  width: 100%;
  height: calc(100vh - 64px);
  position: relative;
  &_background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &_wrap {
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
  &_icon {
    width: 200px;
    height: 200px;
    display: block;
    margin: 0px auto;
  }
  &_status {
    &_players {
      display: inline-block;
      font-size: $font-m;
      color: $color-white;
      letter-spacing: 2px;
    }
    &_ip {
      display: inline-block;
      font-size: $font-l;
      color: $color-white;
      letter-spacing: 2px;
      text-shadow: 0px 3px 3px #00000023;
      border-bottom: 2px solid $color-white;
    }
  }
}
</style>
