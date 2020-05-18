import Vue from "vue";
import VueRouter from "vue-router";
import entryInfoRouter from "./modules/entryInfo";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index"),
    meta: { level: 1 }
  },
  {
    path: "/basicInfo",
    name: "basicInfo",
    component: () => import("@/views/basicInfo/index"),
    meta: { level: 3 }
  },
  {
    path: "/perfectInfo",
    name: "perfectInfo",
    component: () => import("@/views/perfectInfo/index"),
    meta: { level: 3 }
  },
  {
    path: "/carList",
    name: "carList",
    component: () => import("@/views/carList/index"),
    meta: { level: 2 }
  },
  ...entryInfoRouter,
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
