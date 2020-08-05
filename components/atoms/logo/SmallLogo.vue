<template>
  <img class="image-logo" :src="path" />
</template>

<script>
export default {
  props: {
    path: String,
  },
};
</script>

<style lang="scss" scoped>
.image-logo {
  width: 52px;
  height: 52px;
}
</style>
