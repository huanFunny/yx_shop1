<template>
  <div class="index">
    <div class="mian">
      <router-view></router-view>
    </div>

    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/class" icon="search">分类</van-tabbar-item>
      <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="setting-o">
      个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style lang="scss" scoped>
.mian {
  padding-bottom: 60px;
}
</style>
