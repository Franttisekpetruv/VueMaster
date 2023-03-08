import PageHome from "../views/PageHome.vue";
import ThreadSite from "../views/ThreadSite.vue";
import NotFound from "../views/NotFound.vue";
import Forum from "../views/Forum.vue";
import Catlist from "../views/Catlist.vue";
import userPage from "../views/userPage.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: PageHome,
  },
  {
    path: "/thread/:id",
    component: ThreadSite,
    name: "ThreadSite",
    props: true,
  },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  { path: "/cats/:id", name: "Cat", component: Catlist, props: true },
  { path: "/forum/:id", name: "Forum", component: Forum, props: true },
  { path: "/user/", name: "User", component: userPage },
];
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
