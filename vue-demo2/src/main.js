import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router.config.js'
Vue.use(VueRouter);

const router = new VueRouter(routes)
var Sa = {
  template: '<div>uuu90</div>'
}
new Vue({
  router,
  el: '#app',
  // render: h => h(App)
  components: {
    App: App
  }
})
