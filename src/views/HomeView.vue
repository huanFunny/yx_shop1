<template>
  <div class="home">
    <div class="mb10 swipe">
      <van-swipe :autoplay="3000" :show-indicators="false" lazy-render class="van-swipe">
        <van-swipe-item v-for="item in swipeList" :key="item.id">
          <img :src="item.picUrl" />
        </van-swipe-item>
      </van-swipe>

      <div class="swipe-tab">
        <ul>
          <li>
            <img src="../assets/img/love.png" alt="">
            <p>签到</p>
          </li>
          <li>
            <img src="../assets/img/love.png" alt="">
            <p>礼券</p>
          </li>
          <li>
            <img src="../assets/img/love.png" alt="">
            <p>砍价</p>
          </li>
          <li>
            <img src="../assets/img/love.png" alt="">
            <p>专栏</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="mb10">
      <HomeTitle title="人气砍价" />
    </div>

    <div class="mb10 news">
      <HomeTitle title="精选专题" />
      <ul class="bgfff">
        <li v-for="item in newsList" :key="item.id">
          <img :src="item.pic" />
          <div class="text-ellipsis title">{{item.title}}</div>
          <div class="text-ellipsis info">{{ item.descript }}</div>
        </li>
      </ul>
    </div>

    <div class="good-list">
      <HomeTitle title="人气推荐" />
      <ul class="bgfff">
        <li v-for="item in goodsList" :key="item.id" @click="$router.push({path: `/detail/${item.id}`})">
          <img :src="item.pic" />
          <div class="text-ellipsis title">{{item.name}}</div>
          <div class="text-ellipsis info">{{ item.characteristic }}</div>
          <div class="money">¥{{ item.minPrice }}</div>
        </li>
      </ul>
    </div>

    <goTop />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
// import $axios from '../utils/request'
import { getBannerList, getNewsList, getGoodsList } from '../utils/home';
import HomeTitle from '@/components/home-title';
import goTop from '@/components/gotop';

export default {
  components: {
    HomeTitle,
    goTop
  },
  setup() {
    let data = reactive({
      swipeList: [],
      newsList: [],
      goodsList: []
    });
    // 轮播图
    getBannerList().then(res => {
      data.swipeList = res;
    });
    // 精选专题
    getNewsList().then(res => {
      data.newsList = res;
    });
    getGoodsList().then(res => {
      // console.log(res, 'res');
      data.goodsList = res.splice(6, 4);
    });

    // const getBannerList = () => {
    //   $axios.get(`/banner/list`).then()
    // }

    return {
      ...toRefs(data)
    }
  }
}
</script>

<style lang="scss" scoped>
.mb10 {
  margin-bottom: 10px;
}
.bgfff {
  background-color: #fff;
}
.text-ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.swipe {
  position: relative;
  .van-swipe {
    img {
      width: 375px;
      height: 375px;
    }
  }
  .swipe-tab {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    border-radius: 20% 20% 0 0;
    padding-top: 15px;
    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
      img {
        width: 42px;
        height: 42px;
      }
      p {
        font-size: 16px;
      }
    }
  }
}

.news {
  ul {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: auto;
    li {
      /* flex: 1; */
      /* flex-grow : 有多余的空间要不要给分配空间 */
      /* flex-shrink: 要不要缩小 */
      /**flex: flex-grow flex-shrink */
      flex-shrink: 0;
      width: 320px;
      margin-left: 10px;
      img {
        border-radius: 6px;
        width: 320px;
        height: 205px;
      }
      .title {
        font-size: 14px;
        font-weight: 700;
        padding: 15px 0 10px 0;
      }
      .info {
        font-size: 12px;
        color: #a8a8a8;
        padding-bottom: 10px;
      }
    }
  }
}

.good-list {
  ul {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    li {
      width: 48%;
      img {
        width: 100%;
        height: 216px;
      }
      .money {
        color: red;
      }
    }
  }
}
</style>