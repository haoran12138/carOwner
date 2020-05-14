const entryInfoRouter = [
  {
    path: "/entryInfo/cardId",
    name: "cardId",
    component: () => import("@/views/entryInfo/cardId.vue"),
    meta: {
      level: 4
    }
  }
];

export default entryInfoRouter;
