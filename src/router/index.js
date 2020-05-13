import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index")
  },
  {
    path: "/basicInfo",
    name: "basicInfo",
    component: () => import("@/views/basicInfo/index")
  },
  {
    path: "/perfectInfo",
    name: "perfectInfo",
    component: () => import("@/views/perfectInfo/index")
  },
  {
    path: "/carList",
    name: "carList",
    component: () => import("@/views/carList/index")
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/views/test/index")
  },
  {
    path: "*",
    name: "404",
    component: () => import("@/views/404")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
