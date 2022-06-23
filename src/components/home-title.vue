<template>
  <div class="home-title">
    {{ title }}
    <van-icon name="arrow" />
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.home-title {
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
}
</style>