import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import SystemView from "../views/SystemView.vue";

const routes = [
  {
    path: "/",
    redict: "/login",
  },
  {
    path: "/login",
    name: "home",
    component: LoginView,
  },
  {
    path: "/system",
    name: "system",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: SystemView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
