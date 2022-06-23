<template>
  <div class="goods-detail">
    <van-swipe :autoplay="3000" lazy-render class="bgfff my-swipe">
      <van-swipe-item v-for="image in detail.pics2" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>

    <div class="base-info bgfff mb10">
      <!-- <div>{{ (detail.basicInfo || {}).name }}</div> -->
      <div>{{ basicInfo.name }}</div>
      <div>{{ basicInfo.characteristic }}</div>
      <div class="flex-between-center">
        <div>
          <span>低价{{ basicInfo.minPrice }}</span>
          <span>原价{{ basicInfo.originalPrice }}</span>
        </div>
        <div>库存{{ basicInfo.stores }}</div>
      </div>
    </div>

    <van-tabs v-model:active="activeName">
      <van-tab title="商品介绍" name="a">
        <div class="bgfff goods-info" v-html="detail.content"></div>
      </van-tab>
      <van-tab title="商品评价" name="b">
        <div>334455</div>
      </van-tab>
    </van-tabs>


    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-action-bar-icon icon="cart-o" text="购物车" @click="$router.push('/cart')" />
      <van-action-bar-icon :icon="isStar ? 'star' : 'star-o'" :text="isStar ? '已收藏' : '收藏'" color="#ff5000" @click="isStar = !isStar" />
      <van-action-bar-button type="warning" text="加入购物车" />
      <van-action-bar-button type="danger" text="立即购买" />
    </van-action-bar>

    <goTop />
    <goBack />
  </div>
</template>

<script>
import { getGoodsDetail } from '../utils/home'
import { useRoute } from 'vue-router'
import { reactive, toRefs } from 'vue';
import goTop from '@/components/gotop';
import goBack from '@/components/goback';

export default {
  components: {
    goTop,
    goBack
  },
  setup(props) {
    /**
     * this.$route.params.id
     * 在vue3 中不能直接用 this.$route, 因为setup是没有this的，因为setup的执行时间是在beforeCreate之前的
     * useRoute() 相当于 this.$route
     */
    const route = useRoute();
    console.log(route.params.id, '11111')
    const detailId = route.params.id;

    const data = reactive({
      detail: {}, // 商品详情
      basicInfo: {}, // 商品基本信息,
      activeName: 'a', // tab选项卡
      isStar: false, // 收藏
    })


    getGoodsDetail({id: detailId}).then(res => {
      data.detail = res;
      data.basicInfo = res.basicInfo;
      console.log(res, 'res');
    })

    return {
      ...toRefs(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.goods-detail {
  .my-swipe {
    width: 100%;
    height: 375px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  /* ::v-deep 修改此组件中我们看不到样式，我们用 ::v-deep 修改深层次的样式 */
  ::v-deep .goods-info {
    img {
      width: 375px !important;
      height: 94px !important;
    }
  }
  /* .goods-info {
    :deep(img) {
      width: 375px !important;
      height: 94px !important;
    }
    :deep(li) {
      font-size: 14px;
    }
  } */
}
</style>