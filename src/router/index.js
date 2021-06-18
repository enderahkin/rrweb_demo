/*
 * @Author: ZHOUWEN
 * @Date: 2021-05-28 10:01:22
 * @LastEditTime: 2021-06-18 11:27:04
 * @LastEditors: ZHOUWEN
 * @Description: 
 * @fileheader.Author: ZHOUWEN
 * @fileheader.LastModifiedBy: ZHOUWEN
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Record from '../views/Record.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Record',
    component: Record
  },
  {
    path: '/Play',
    name: 'Play',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/Play.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
