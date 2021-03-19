import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';

import mock from './mock.js'

let data = {
  countires: mock
}


Vue.config.productionTip = false

export const eventBus = new Vue({
  methods:{
    listEdit(memo, index) {
      this.$emit('listEdit', memo, index)
    }
  }
})

new Vue({
  router,
  vuetify,
  data,
  render: h => h(App)
}).$mount('#app')
