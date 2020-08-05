<template>
  <div class="sinbol-logo">
    <small-logo path="/img/icon.png" class="pr-5" />
    <text-logo />
  </div>
</template>

<script>
import SmallLogo from "~/components/atoms/logo/SmallLogo.vue";
import TextLogo from "~/components/atoms/logo/TextLogo.vue";

export default {
  components: {
    SmallLogo,
    TextLogo,
  },
};
</script>

<style lang="scss" scoped>
.sinbol-logo {
  display: inline-flex;
  align-items: center;
}
</style>
