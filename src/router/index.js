import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'Tabs',
    redirect:'/Home',//重定向
    component: () => import(/* webpackChunkName: "about" */ '../views/tabs.vue'),
    children:[
      {
        path: '/Home',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue')
      },
      {
        path: '/Channel',
        name: 'Channel',
        
        component: () => import('../views/channel/Channel.vue')
      },
      {
        path: '/Teleplay',
        name: 'Teleplay',
       
        component: () => import('../views/teleplay/Teleplay.vue')
      },
      {
        path: '/Mine',
        name: 'Mine',
        
        component: () => import('../views/mine/Mine.vue')
      }
    ]
  }
  
]

const router = new VueRouter({
  routes
})

export default router
