import modules from './modules'
import Vue from 'vue'
import { RouterMount, createRouter } from 'uni-simple-router'

//初始化
const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,
	routes: [...modules]
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log(to.meta)
	next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
})

export {
	router,
	RouterMount
}