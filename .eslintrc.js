module.exports =
{
  extends: ['prettier'],
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "js": true,
    }
  },
  "rules": {
    //以防线上环境出现console.log
    'no-console': [2],
    // 禁止空块语句
    'no-empty': "error",
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'prefer-destructuring': [2, { object: false, array: false }],
    'linebreak-style': [0, 2, 'windows'],
    // 四个空格缩进
    "indent": ["error", 4],
    // 禁止重复的模块导入
    // "no-duplicate-imports": "error",
    // 禁止修改const 声明的变量
    "no-const-assign": "error",
    // 禁止连续空行
    "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 1 }],
    // 强制使用驼峰命名发
    'camelcase': "error",
  }

}
