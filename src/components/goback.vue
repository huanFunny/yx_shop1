<template>
  <div class="gotop" @click="$router.back()">
    <van-icon name="arrow-left" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  setup(props) {
    /**
     * this.$router.push()
     * useRouter 相当于 this.$router
     */
    const router = useRouter();
    console.log(1111);
    console.log(router, 'router');
    /**
     * router.push({path: ''}) // 跳转
     * router.back() // 返回上一页面 指向 router.go(-1)
     * router.go(-2) // 返回前两页
     */

    const handleClick = () => {}

    return {
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
.gotop {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #fff;
  position: fixed;
  left: 20px;
  top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>