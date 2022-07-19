import { defineConfig } from "@umijs/max";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: "umi",
  },

  routes: [
    {
      path: "/",
      redirect: "/home",
    },

    {
      name: "首页",
      path: "/home",
      component: "./Home",
    },

    {
      name: "权限演示",
      path: "/access",
      component: "./Access",
    },

    {
      name: " dd",
      path: "/table",
      component: "./Table",
    },
    // {
    //   name: " 测试页面",
    //   path: "/testpage",
    //   component: "./src/pages/TestPage/Testpage.jsx",
    // },
  ],

  npmClient: "npm",
  dva: {},
});
