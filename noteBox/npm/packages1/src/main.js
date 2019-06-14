import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import myRoutes from './router/index.js'

Vue.use(Router)

let router = new Router({
  routes: [
  ...myRoutes
	]
	})
	
	// new Vue({
	//   router
	// }).$mount('#app')
	// 
new Vue({
  el: '#app',
	router,
  render: h => h(App)
})
