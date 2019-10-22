import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import router from './router'

Vue.use(ElementUI, {size: 'medium'})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
