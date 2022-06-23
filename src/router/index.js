import { createRouter, createWebHashHistory } from 'vue-router'
import IndexView from '../views/IndexView'

const HomeView = () => import('../views/HomeView')
const ClassView = () => import('../views/ClassView')
const Cart = () => import('../views/Cart')
const UserView = () => import('../views/UserView')
// 商品详情
const goodsDetail = () => import('../views/goods-detail')


const routes = [
  {
    path: '/',
    name: 'home',
    component: IndexView,
    children: [
      {
        path: '/',
        redirect: 'home',
      },
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
      {
        path: 'class',
        name: 'class',
        component: ClassView
      },
      {
        path: 'cart',
        name: 'cart',
        component: Cart
      },
      {
        path: 'user',
        name: 'user',
        component: UserView
      },
    ]
  },
  {
    path: '/detail/:id',
    name: 'goods-detail',
    component: goodsDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
