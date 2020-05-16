const entryInfoRouter = [
  {
    path: "/entryInfo/cardId",
    name: "cardId",
    component: () => import("@/views/entryInfo/cardId.vue"),
    meta: {
      level: 4
    }
  },
  {
    path: "/entryInfo/cardDrive",
    name: "cardDrive",
    component: () => import("@/views/entryInfo/cardDrive.vue"),
    meta: {
      level: 4
    }
  },
  {
    path: "/entryInfo/insurance",
    name: "insurance",
    component: () => import("@/views/entryInfo/insurance.vue"),
    meta: {
      level: 4
    }
  },
  {
    path: "/entryInfo/carImgs",
    name: "carImgs",
    component: () => import("@/views/entryInfo/carImgs.vue"),
    meta: {
      level: 4
    }
  },
  {
    path: "/entryInfo/carInfo",
    name: "carInfo",
    component: () => import("@/views/entryInfo/carInfo.vue"),
    meta: {
      level: 4
    }
  },
  {
    path: "/entryInfo/carDesc",
    name: "carDesc",
    component: () => import("@/views/entryInfo/carDesc.vue"),
    meta: {
      level: 4
    }
  }
];

export default entryInfoRouter;
