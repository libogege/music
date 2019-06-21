import Vue from 'vue'
import Router from 'vue-router'
// import Recommend from 'components/recommend/recommend'
const Recommend = () => ({
  component: import('components/recommend/recommend')
})
// import Singer from 'components/singer/singer'
const Singer = () => ({
  component: import('components/singer/singer')
})
// import Rank from 'components/rank/rank'
const Rank = () => ({
  component: import('components/rank/rank')
})
// import Search from 'components/search/search'
const Search = () => ({
  component: import('components/search/search')
})
// import SingerDetail from 'components/singer-detail/singer-detail'
const SingerDetail = () => ({
  component: import('components/singer-detail/singer-detail')
})
// import Disc from 'components/disc/disc'
const Disc = () => ({
  component: import('components/disc/disc')
})
// import TopList from 'components/top-list/top-list'
const TopList = () => ({
  component: import('components/top-list/top-list')
})
// import UserCenter from 'components/user-center/user-center'
const UserCenter = () => ({
  component: import('components/user-center/user-center')
})

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    }, {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    }, {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }, {
      path: '/rank',
      component: Rank,
      children: [
        {
          path: ':id',
          component: TopList
        }
      ]
    }, {
      path: '/search',
      component: Search,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    },
    {
      path: '/user',
      component: UserCenter
    }
  ]
})
