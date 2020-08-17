<style lang="scss" scoped>
.user-search {
  padding-bottom: 60px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  &_input {
    border-top: 1px solid $color-gray;
    border-bottom: 1px solid $color-gray;
    border-left: 1px solid $color-gray;
    padding: 12px;
    width: 250px;
    color: $color-black;
  }
  &_submit {
    background-color: $color-orange;
    color: $color-white;
    padding: 12px 20px;
    letter-spacing: 1.5px;
  }
}
</style>

<template>
  <form class="user-search" @submit.prevent="search">
    <input
      type="text"
      class="user-search_input"
      v-model="username"
      placeholder="search for username"
      required
    />
    <input type="submit" class="user-search_submit" value="Search" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    async search() {
      this.$router.push({ name: "user-name", params: { name: this.username } });
    },
  },
};
</script>
