import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import cordovaLoader from './plugins/cordovaLoader'

Vue.config.productionTip = false

cordovaLoader(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
