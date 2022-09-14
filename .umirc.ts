import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  // plugins: ['./plugins/404.jsx'],
  layout: {},
  //改变主题颜色
  // theme: {
  //   '@primary-color': 'pink',
  // },

  routes: [
    {
      path: '/',
      redirect: '/access',
    },

    // {
    //   name: '首页',
    //   path: '/home',
    //   // component: './Home',
    //   routes: [
    //     {
    //       name: '首页',
    //       path: '/home',
    //       component: './Home',
    //     },
    //     {
    //       name: 'dd',
    //       path: '/home/belint',
    //       component: './Home/Belint',
    //     },
    //     {
    //       name: '穿梭框示例',
    //       path: '/home/backpage',
    //       component: './Home/backpage',
    //     },
    //   ],
    // },

    {
      name: '增删改查示例',
      path: '/access',
      component: './Access',
    },

    // {
    //   name: 'Table示例',
    //   path: '/table',
    //   component: './Table',
    // },
    // {
    //   name: ' flex示例',
    //   path: '/hookls',
    //   component: './Hookls',
    // },
  ],
  npmClient: 'npm',
  dva: {},
});
