import Vue from 'vue'
import Router from 'vue-router'

import HomeView from '@/views/Home'
import AboutView from '@/views/About'
import PortfolioView from '@/views/Portfolio'
import ContactView from '@/views/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      component: HomeView
    },
    {
      name: 'about',
      path: '/about',
      component: AboutView
    },
    {
      name: 'portfolio',
      path: '/portfolio',
      component: PortfolioView
    },
    {
      name: 'contact',
      path: '/contact',
      component: ContactView
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
