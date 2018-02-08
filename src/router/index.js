import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import MyMusic from 'components/my-music'
import OnlineMusic from 'components/online-music'
import Topic from 'components/Topic'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/my-music',
      name: 'my-music',
      component: MyMusic
    },
    {
      path: '/online-music',
      name: 'online-music',
      component: OnlineMusic
    },
    {
      path: '/topic',
      name: 'topic',
      component: Topic
    }
  ]
})
