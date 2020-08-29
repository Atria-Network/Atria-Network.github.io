<style lang="scss" scoped>
.guide {
  &_index {
    width: 100%;
    height: calc(100vh - 64px);
    position: relative;
    @include mq(md) {
      height: calc(100vh - 64px);
    }
    &_background {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      &::after {
        content: "";
        background-color: #000000;
        opacity: 0.5;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }

    &_title {
      width: 100%;
      padding: 100px 0;
      text-align: center;
      font-size: $font-cap;
      font-weight: bold;
      color: $color-white;
      text-shadow: 0 3px 4px;
      text-shadow: 0px 3px 3px #00000023;
      @include mq(md) {
        padding: 60px 0;
      }
    }
    &_nav {
      width: 320px;
      margin: 0 auto;
      justify-content: center;
      flex-wrap: wrap;
      color: $color-white;
      @include mq(md) {
        width: 100%;
      }
      &_item {
        width: 320px;
        margin: 10px auto;
        height: 50px;
        font-size: 20px;
        display: flex;
        align-items: center;
        &_no {
          width: 70px;
          height: 50px;
          line-height: 50px;
          font-size: $font-xl;
          position: relative;
          text-align: center;
          &::after {
            content: "";
            display: block;
            width: 2px;
            height: 50px;
            background-color: $color-white;
            position: absolute;
            top: 0;
            right: 0;
          }
        }
        &_link {
          min-width: 250px;
          display: block;
          text-align: left;
          font-weight: bold;
          padding: 0 20px;
          position: relative;
        }
        &_sub {
          display: block;
          width: 100%;
          font-size: $font-xs;
        }
      }
    }
  }
  &_page {
    width: 100%;
    height: calc(100vh - 64px);
    position: relative;
    &_background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      img {
        width: 100%;
        height: 100%;
      }
    }
    &_content {
      width: 50%;
      height: 100%;
      padding: 60px;
      position: absolute;
      top: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.8);
      color: $color-white;
      @include mq(md) {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        padding: 40px 10px;
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
      }
    }
  }
}
</style>

<template>
  <div class="main_wrap">
    <div class="guide">
      <article class="guide_index">
        <div class="guide_index_background">
          <img src="/img/background.jpg" />
        </div>
        <h1 class="guide_index_title">Guide Index</h1>
        <ul class="guide_index_nav">
          <li class="guide_index_nav_item">
            <span class="guide_index_nav_item_no">1.</span>
            <a class="guide_index_nav_item_link" href>
              CP
              <span class="guide_index_nav_item_sub">Capture The Wool</span>
            </a>
          </li>
          <li class="guide_index_nav_item">
            <span class="guide_index_nav_item_no">2.</span>
            <a class="guide_index_nav_item_link" href>
              DTC/M
              <span class="guide_index_nav_item_sub">Destroy The Core/Monument</span>
            </a>
          </li>
          <li class="guide_index_nav_item">
            <span class="guide_index_nav_item_no">3.</span>
            <a class="guide_index_nav_item_link" href>
              CTF
              <span class="guide_index_nav_item_sub">Capture The Flag</span>
            </a>
          </li>
          <li class="guide_index_nav_item">
            <span class="guide_index_nav_item_no">4.</span>
            <a class="guide_index_nav_item_link" href>
              TDM
              <span class="guide_index_nav_item_sub">Team Death Match</span>
            </a>
          </li>
          <li class="guide_index_nav_item">
            <span class="guide_index_nav_item_no">5.</span>
            <a class="guide_index_nav_item_link" href>
              CP
              <span class="guide_index_nav_item_sub">Capther the Point</span>
            </a>
          </li>
        </ul>
      </article>
      <article class="guide_page">
        <div class="guide_page_background">
          <img src="/img/CP.png" />
        </div>
        <div class="guide_page_content">
          <h2>Coming soon.....</h2>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {};
</script>
