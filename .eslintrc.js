/*
 * @Author: ZHOUWEN
 * @Date: 2021-05-28 10:01:22
 * @LastEditTime: 2021-06-18 10:43:39
 * @LastEditors: ZHOUWEN
 * @Description: 
 * @fileheader.Author: ZHOUWEN
 * @fileheader.LastModifiedBy: ZHOUWEN
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-undef': 'off', // 关闭 未定义 检查
    'vue/no-unused-vars': 'off',
    'vue/require-v-for-key': 'off',
    'no-unused-vars': 'off',
    'vue/no-unused-components': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}