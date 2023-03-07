import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _eeadab6e = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _4954384b = () => interopDefault(import('../pages/app-development.vue' /* webpackChunkName: "pages/app-development" */))
const _3a537a16 = () => interopDefault(import('../pages/blog.vue' /* webpackChunkName: "pages/blog" */))
const _5995e54d = () => interopDefault(import('../pages/blog-grid.vue' /* webpackChunkName: "pages/blog-grid" */))
const _d0dea4e2 = () => interopDefault(import('../pages/blog-single.vue' /* webpackChunkName: "pages/blog-single" */))
const _42748ee4 = () => interopDefault(import('../pages/ceomessage.vue' /* webpackChunkName: "pages/ceomessage" */))
const _36719b8e = () => interopDefault(import('../pages/company.vue' /* webpackChunkName: "pages/company" */))
const _0584905c = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _40be4926 = () => interopDefault(import('../pages/digital-marketing.vue' /* webpackChunkName: "pages/digital-marketing" */))
const _621a34e5 = () => interopDefault(import('../pages/DigitalAsssts.vue' /* webpackChunkName: "pages/DigitalAsssts" */))
const _cff325de = () => interopDefault(import('../pages/faqs.vue' /* webpackChunkName: "pages/faqs" */))
const _dbd4692c = () => interopDefault(import('../pages/getquotation.vue' /* webpackChunkName: "pages/getquotation" */))
const _14881f0a = () => interopDefault(import('../pages/graphic-designing.vue' /* webpackChunkName: "pages/graphic-designing" */))
const _0ea0eab3 = () => interopDefault(import('../pages/index-2.vue' /* webpackChunkName: "pages/index-2" */))
const _0eaf0234 = () => interopDefault(import('../pages/index-3.vue' /* webpackChunkName: "pages/index-3" */))
const _18240b44 = () => interopDefault(import('../pages/not-found.vue' /* webpackChunkName: "pages/not-found" */))
const _e22fc782 = () => interopDefault(import('../pages/officepage.vue' /* webpackChunkName: "pages/officepage" */))
const _b08c76f8 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _25246b61 = () => interopDefault(import('../pages/portfolio-single.vue' /* webpackChunkName: "pages/portfolio-single" */))
const _68240846 = () => interopDefault(import('../pages/portfolio-single-2.vue' /* webpackChunkName: "pages/portfolio-single-2" */))
const _aaa597ce = () => interopDefault(import('../pages/seo.vue' /* webpackChunkName: "pages/seo" */))
const _7803ced2 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _0364915e = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _095fc528 = () => interopDefault(import('../pages/testimonials.vue' /* webpackChunkName: "pages/testimonials" */))
const _20400142 = () => interopDefault(import('../pages/ui-designing.vue' /* webpackChunkName: "pages/ui-designing" */))
const _1a69c37e = () => interopDefault(import('../pages/web-development.vue' /* webpackChunkName: "pages/web-development" */))
const _af3df5e4 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    path: "/about",
    component: _eeadab6e,
    name: "about"
  }, {
    path: "/app-development",
    component: _4954384b,
    name: "app-development"
  }, {
    path: "/blog",
    component: _3a537a16,
    name: "blog"
  }, {
    path: "/blog-grid",
    component: _5995e54d,
    name: "blog-grid"
  }, {
    path: "/blog-single",
    component: _d0dea4e2,
    name: "blog-single"
  }, {
    path: "/ceomessage",
    component: _42748ee4,
    name: "ceomessage"
  }, {
    path: "/company",
    component: _36719b8e,
    name: "company"
  }, {
    path: "/contact",
    component: _0584905c,
    name: "contact"
  }, {
    path: "/digital-marketing",
    component: _40be4926,
    name: "digital-marketing"
  }, {
    path: "/DigitalAsssts",
    component: _621a34e5,
    name: "DigitalAsssts"
  }, {
    path: "/faqs",
    component: _cff325de,
    name: "faqs"
  }, {
    path: "/getquotation",
    component: _dbd4692c,
    name: "getquotation"
  }, {
    path: "/graphic-designing",
    component: _14881f0a,
    name: "graphic-designing"
  }, {
    path: "/index-2",
    component: _0ea0eab3,
    name: "index-2"
  }, {
    path: "/index-3",
    component: _0eaf0234,
    name: "index-3"
  }, {
    path: "/not-found",
    component: _18240b44,
    name: "not-found"
  }, {
    path: "/officepage",
    component: _e22fc782,
    name: "officepage"
  }, {
    path: "/portfolio",
    component: _b08c76f8,
    name: "portfolio"
  }, {
    path: "/portfolio-single",
    component: _25246b61,
    name: "portfolio-single"
  }, {
    path: "/portfolio-single-2",
    component: _68240846,
    name: "portfolio-single-2"
  }, {
    path: "/seo",
    component: _aaa597ce,
    name: "seo"
  }, {
    path: "/services",
    component: _7803ced2,
    name: "services"
  }, {
    path: "/team",
    component: _0364915e,
    name: "team"
  }, {
    path: "/testimonials",
    component: _095fc528,
    name: "testimonials"
  }, {
    path: "/ui-designing",
    component: _20400142,
    name: "ui-designing"
  }, {
    path: "/web-development",
    component: _1a69c37e,
    name: "web-development"
  }, {
    path: "/",
    component: _af3df5e4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
