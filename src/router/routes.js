const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/MainPage.vue") },
      { path: "/cilt-a", component: () => import("src/pages/cilt-a.vue") },
      { path: "/aktif-i", component: () => import("src/pages/aktif-i.vue") },
      { path: "/biz-k", component: () => import("src/pages/biz-k.vue") },
      { path: "/rutin-o", component: () => import("src/pages/rutin-o.vue") },
      { path: "/sürdü-b", component: () => import("src/pages/sürdü-b.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
