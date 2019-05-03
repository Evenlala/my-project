import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
        meta: {
            requireAuth: true
        }
    },
     {
          path: '/login',
          name: 'login',
          component: () => import("./views/login.vue")
      },
      {
          path: '/user',
          name: 'user',
          component: () => import("./views/user.vue")
      },
      {
          path: '/tddetailed',
          name: 'tddetailed',
          component: () => import("./views/tddetailed.vue")
      }
  ]
});

/*router.beforeEach((to,from,next)=>{
  const isLogin =localStorage.ele_login ? true:false;
  if(to.path == '/login'){
    next();
  }else{
  isLogin?next(): next('/login');
  }
})*/
router.beforeEach((to, from, next) => {
    if (to.matched.some(res => res.meta.requireAuth)) {// 判断是否需要登录权限
        if (localStorage.getItem('token')) {// 判断是否登录
            next()
        } else {// 没登录则跳转到登录界面
            next({
                path: '/Login',
                query: {redirect: to.fullPath}
            })
        }
    } else {
        next()
    }
})
export default router;
