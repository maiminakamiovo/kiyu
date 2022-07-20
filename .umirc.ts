import { defineConfig } from "@umijs/max";

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: "umi",
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
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
      name: "基本的增删改查",
      path: "/access",
      component: "./Access",
    },

    {
      name: " dd",
      path: "/table",
      component: "./Table",
    },
    {
      name: " 测试页面",
      path: "/hookls",
      component: "./Hookls",
    },
  ],

  npmClient: "npm",
  dva: {},
});
