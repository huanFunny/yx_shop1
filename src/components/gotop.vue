<template>
  <div class="gotop" v-show="show" @click="handleClick">
    <van-icon name="arrow-up" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
  setup(props) {
    const data = reactive({
      show: false
    });

    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      console.log(scrollTop, 'scrollTop');
      if (scrollTop > 300) {
        data.show = true;
      } else {
        data.show = false;
      }
    }
    const handleClick = () => {
      document.documentElement.scrollTop = 0;
    }

    return {
      ...toRefs(data),
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
  right: 20px;
  bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>