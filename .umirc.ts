import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'umi',
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
  },

  routes: [
    {
      path: '/',
      redirect: '/home',
    },

    {
      name: '首页',
      path: '/home',
      component: './Home',
    },

    {
      name: '增删改查示例',
      path: '/access',
      component: './Access',
    },

    {
      name: 'Table示例',
      path: '/table',
      component: './Table',
    },
    {
      name: ' flex示例',
      path: '/hookls',
      component: './Hookls',
    },
    {
      name: '隐患库',
      path: '/testpage',
      component: './Testpage',
    },
  ],

  npmClient: 'npm',
  dva: {},
});
