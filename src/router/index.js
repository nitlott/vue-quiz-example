import { createRouter, createWebHistory } from "vue-router";
import QuizesView from "../views/QuizesView.vue";
import QuizView from "../views/QuizView.vue";
import HomeView from "../views/HomeView.vue";
import NotFoundView from "../views/404View.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: QuizesView,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/quiz",
      name: "Quiz",
      component: QuizesView,
    },
    {
      path: "/quiz/:id",
      name: "QuizView",
      component: QuizView,
    },
    {
      path: "/:catchall(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
