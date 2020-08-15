import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4e0a5456 = () => interopDefault(import('../pages/about-us.vue' /* webpackChunkName: "pages/about-us" */))
const _6af32a00 = () => interopDefault(import('../pages/download.vue' /* webpackChunkName: "pages/download" */))
const _24eb866e = () => interopDefault(import('../pages/shop.vue' /* webpackChunkName: "pages/shop" */))
const _6f2f8aec = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about-us",
    component: _4e0a5456,
    name: "about-us"
  }, {
    path: "/download",
    component: _6af32a00,
    name: "download"
  }, {
    path: "/shop",
    component: _24eb866e,
    name: "shop"
  }, {
    path: "/",
    component: _6f2f8aec,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
