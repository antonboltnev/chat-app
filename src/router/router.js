import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import vUsersList from '../components/users/v-users-list'
import vUserChat from '../components/users/chat/v-user-chat'

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'users',
      component: vUsersList
    },
    {
      path: '/user',
      name: 'user',
      component: vUserChat,
      props: true
    }
  ]
})

export default router;
