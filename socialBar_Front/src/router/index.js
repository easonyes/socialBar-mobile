import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import register from '@/components/register'
import login from '@/components/Login'
import setPwd from '@/components/setPwd'
import emLogin from '@/components/emLogin'
import home from '@/components/home'
import main from '@/components/main'
import collection from '@/components/collection'
import chat from '@/components/chat'
import mine from '@/components/mine'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: "/login"
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/setPwd',
      name: 'setPwd',
      component: setPwd
    },
    {
      path: '/emLogin',
      name: 'emLogin',
      component: emLogin
    },
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/main',
          name: 'main',
          component: main
        },
        {
          path: '/collection',
          name: 'collection',
          component: collection
        },
        {
          path: '/chat',
          name: 'chat',
          component: chat
        },
        {
          path: '/mine',
          name: 'mine',
          component: mine
        },
      ]
    }
  ]
})
