import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
    children: [{
      path: "/user",
      name: "User",
      component: () => import("../views/users/index.vue")
    }, {
      path: "/safe",
      name: "Safe",
      component: () => import("../views/safe/index.vue")
    },
    {
      path: "/password",
      name: "Password",
      component: () => import("../views/safe/password/index.vue")
    },
    {
      path: "/moneyPw",
      name: "MoneyPw",
      component: () => import("../views/safe/money-pw/index.vue")
    },
    {
      path: "/phone",
      name: "Phone",
      component: () => import("../views/safe/phone/index.vue")
    }, {
      path: "/bankCard",
      name: "BankCard",
      component: () => import("../views/safe/bank-card/index.vue")
    }, {
      path: "/info",
      name: "Info",
      component: () => import("../views/info/index.vue")
    },{
      path: "/member-lv",
      name: "MemberLv",
      component: () => import("../views/info/memberLv/index.vue")
    }]
  }
  // ,
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
