<style lang="scss" scoped>
.top-visual {
  width: 100%;
  height: calc(85vh - 64px);
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
    position: relative;
    &_players {
      display: inline-block;
      font-size: $font-m;
      color: $color-white;
      letter-spacing: 2px;
    }
    &_onlines {
      font-size: $font-l;
    }
    &_ip {
      display: inline-block;
      font-size: $font-l;
      color: $color-white;
      letter-spacing: 2px;
      text-shadow: 0px 3px 3px #00000023;
      border-bottom: 2px solid $color-white;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.05);
      }
    }
    &_clip {
      position: absolute;
      bottom: 15px;
      left: 50%;
      display: inline-block;
      padding: 6px 20px;
      background-color: $color-red;
      color: $color-white;

      transition: all 0.3;

      transform: translateX(-50%);
    }
  }
}
.fade-enter-active {
  transition: opacity 0.3s;
}
</style>



<template>
  <div class="top-visual">
    <img class="top-visual_background" src="/img/background.jpg" />
    <div class="top-visual_wrap">
      <img class="top-visual_icon" src="/img/icon.png" />
      <div class="top-visual_status pb-40">
        <label class="top-visual_status_players pb-20">
          Play with
          <span
            class="top-visual_status_onlines"
            data-playercounter-ip="play.atria.network"
          ></span> players on
        </label>
        <button class="top-visual_status_ip mb-10" @click="clipevent()">play.atria.network</button>
        <transition name="fade">
          <span class="top-visual_status_clip" v-if="copied">Copied IP!</span>
        </transition>
      </div>
      <PrimaryButton to="howto">Let't Play</PrimaryButton>
    </div>
  </div>
</template>

<script>
import SmallSinbol from "~/components/molecules/sinbol/SmallSinbol.vue";
import PrimaryButton from "~/components/atoms/button/PrimaryButton.vue";
export default {
  components: {
    SmallSinbol,
  },
  data: function () {
    return {
      copied: false,
    };
  },
  methods: {
    clipevent() {
      navigator.clipboard.writeText("play.atria.network");
      this.copied = true;
    },
  },
};
</script>

