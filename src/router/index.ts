import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Item from "../views/Item.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Item/:id",
      name: "Item",
      component: Item,
    },
  ],
});

export default router;
