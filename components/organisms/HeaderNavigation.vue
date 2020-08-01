<template>
  <header class="header-navigation">
    <small-sinbol />
  </header>
</template>

<script>
import SmallSinbol from "~/components/molecules/SmallSinbol.vue";
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
  padding: 0 8px;

  background-color: $color-back;
}
</style>
