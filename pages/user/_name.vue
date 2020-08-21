<style lang="scss" scoped>
.user {
  &_head {
    display: inline-flex;
    align-items: center;
    padding-bottom: 60px;
    &_skin {
      width: 96px;
      height: 96px;
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
    @include mq(md) {
      grid-template-columns: 1fr;
    }
    gap: 80px 20px;
    &_item {
      border-bottom: 2px solid $color-gray;
      &_head {
        font-size: $font-l;
        display: inline-block;
        width: 100%;
        text-align: center;
        font-weight: 500;
        color: $color-black;
      }
      &_content {
        font-size: $font-xl;
        display: inline-block;
        width: 100%;
        text-align: center;
        padding: 40px 0;
      }
    }
  }
}
</style>

<template>
  <div class="main_wrap">
    <PageVisual>User Stats</PageVisual>
    <article class="content">
      <div class="content_wrap">
        <user-search />
        <div class="user" v-if="status.code">
          <div class="user_head">
            <div class="user_head_skin">
              <img v-bind:src="skin_url" />
            </div>
            <div class="user_head_name">{{ status.user.name }}</div>
          </div>
          <ul class="user_status">
            <li class="user_status_item">
              <h2 class="user_status_item_head">Kill/Death Ratio</h2>
              <span
                class="user_status_item_content"
              >{{ (status.user.kills > 0) ? Math.round((status.user.kills / status.user.deaths) * 1000 ) / 1000 : "0" }}</span>
            </li>
            <li class="user_status_item">
              <h2 class="user_status_item_head">Kill Count</h2>
              <span class="user_status_item_content">{{ status.user.kills }}</span>
            </li>
            <li class="user_status_item">
              <h2 class="user_status_item_head">Death Count</h2>
              <span class="user_status_item_content">{{ status.user.deaths }}</span>
            </li>

            <li class="user_status_item">
              <h2 class="user_status_item_head">WOOL</h2>
              <span class="user_status_item_content">{{ status.user.wools }}</span>
            </li>
            <li class="user_status_item">
              <h2 class="user_status_item_head">CORES</h2>
              <span class="user_status_item_content">{{ status.user.cores }}</span>
            </li>
            <li class="user_status_item">
              <h2 class="user_status_item_head">MONUMENT</h2>
              <span class="user_status_item_content">{{ status.user.monuments }}</span>
            </li>
            <li class="user_status_item">
              <h2 class="user_status_item_head">FLAG</h2>
              <span class="user_status_item_content">{{ status.user.flags }}</span>
            </li>
          </ul>
        </div>
        <section v-else>
          <h2>{{ params.name }} Not Found.</h2>
        </section>
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
  mounted() {},
  async asyncData({ $axios, params }) {
    const url = "http://127.0.0.1:3001/api/v1/user?name=" + params.name;
    const status = await $axios.$get(url);
    if (status.code == true) {
      const skin_url =
        "https://cravatar.eu/helmhead/" + status.user.uuid + "/128.png";
      return {
        status,
        skin_url,
      };
    } else {
      return {
        status,
        params,
      };
    }
  },
};
</script>
