import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginAndSignUp from '../views/LoginAndSignUp.vue'
Vue.use(VueRouter)


let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'Home',
      component: LoginAndSignUp,
      meta:{
        guest:true
      }
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: () => import(/* webpackChunkName: "about" */ '../views/DashBoard.vue'),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/userlist',
      name: 'Userlist',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/Userlist.vue'),
      meta:{
        requiresAuth:true
      }
    },
    
  ]
})






router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (localStorage.getItem('auth') == null) {
          next({
              path: '/',
              params: { nextUrl: to.fullPath }
          })
      } else {
          let user = JSON.parse(localStorage.getItem('user'))
          if(to.matched.some(record => record.meta.is_admin)) {
              if(user.typeUser == "admin"){
                  next()
              }
              else{
                  next({ name: 'DashBoard'})
              }
          }else {
              next()
          }
      }
  } else if(to.matched.some(record => record.meta.guest)) {
      if(localStorage.getItem('auth') == null){
          next()
      }
      else{
          next({ name: 'DashBoard'})
      }
  }else {
      next()
  }
})






export default router
