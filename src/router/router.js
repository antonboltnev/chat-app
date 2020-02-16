import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

import vContactList from '../components/contacts/v-contact-list'
import vContactUserInfo from '../components/contacts/v-contact-user-info'
import vUsersList from '../components/users/v-users-list'
import vUserChat from '../components/users/chat/v-user-chat'

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: vContactList
    },
    {
      path: '/contact',
      name: 'contact',
      component: vContactUserInfo,
      props: true
    },
    {
      path: '/chats',
      name: 'chats',
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
