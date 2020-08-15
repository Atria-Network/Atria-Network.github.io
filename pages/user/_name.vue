<style lang="scss" scoped>
.user {
  &_head {
    display: inline-flex;
    align-items: center;
    &_skin {
      width: 72px;
      height: 72px;
      background-color: black;
      & > img {
        width: 100%;
        height: 100%;
      }
    }
    &_name {
      padding-left: 30px;
      font-size: $font-xl;
      font-weight: bold;
    }
  }
  &_status {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    &_item {
    }
  }
}
</style>

<template>
  <div class="main_wrap">
    <PageVisual>User Status</PageVisual>
    <article class="content">
      <div class="content_wrap">
        <div class="user">
          <div class="user_head">
            <div class="user_head_skin">
              <img v-bind:src="skin_url" />
            </div>
            <div class="user_head_name">{{ status.user.name }}</div>
          </div>
          <ul class="user_status">
            <li class="user_status_item"></li>
          </ul>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const url = "http://localhost:3001/api/v1/user?name=" + params.name;
    const status = await $axios.$get(url);
    const skin_url = "https://crafatar.com/avatars/" + status.user.uuid;
    return {
      status,
      skin_url,
    };
  },
};
</script>
