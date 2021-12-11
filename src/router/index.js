import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login/login.vue'
Vue.use(VueRouter)


let router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{
        guest:true
      }
    },
    {
      path: '/dashboard',
      name: 'DashBoard',
      component: () => import(/* webpackChunkName: "about" */ '../views/dashboard/dashboard.vue'),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/droguerias',
      name: 'Droguerias',
      component: () => import(/* webpackChunkName: "about" */ '../views/droguerias/droguerias.vue'),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/droguerias-productos',
      name: 'DrogueriasProductos',
      component: () => import(/* webpackChunkName: "about" */ '../views/products/products.vue'),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import(/* webpackChunkName: "about" */ '../views/profile/profile.vue'),
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
