<style lang="scss" scoped>
</style>

<template>
  <div class="main_wrap">
    <PageVisual>Status Search</PageVisual>
    <article class="content">
      <div class="content_wrap">
        <user-search />
      </div>
    </article>
  </div>
</template>

<script>
import UserSearch from "~/components/organisms/UserSearch.vue";
export default {
  components: {
    UserSearch,
  },
};
</script>
