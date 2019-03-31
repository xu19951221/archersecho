/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
  					path => router path
  					name => router name
  					component(lazy loading) => component to load
  ----------------------------------------------------------------------------------------
  Item Name: Vuesax Admin - VueJS Dashboard Admin Template
  Version: 1.1
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import Vue from "vue";
import Router from "vue-router";
import authGuard from "./authGuard";

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes: [
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: "",
      component: () => import("../layouts/main/Main.vue"),
      children: [
        // =============================================================================
        // Theme Routes
        // =============================================================================
        {
          path: "/",
          name: "home",
          component: () => import("../views/home/Index.vue")
        },
        {
          path: "/page2",
          name: "page2",
          component: () => import("../views/Page2.vue")
        }
      ],
      beforeEnter: authGuard
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: "",
      component: () => import("@/layouts/full-page/FullPage.vue"),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: "/login",
          name: "login",
          component: () => import("@/views/auth/Login.vue")
        },
        {
          path: "/register",
          name: "register",
          component: () => import("@/views/auth/Register.vue")
        },
        {
          path: "/pages/error-404",
          name: "pageError404",
          component: () => import("@/views/pages/Error404.vue")
        }
      ]
    },
    // Redirect to 404 page, if no match found
    {
      path: "*",
      redirect: "/pages/error-404"
    }
  ]
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;