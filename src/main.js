import Vue from 'vue'
import Vuelidate from 'vuelidate'
import Site from './Site.vue'

Vue.config.productionTip = false
Vue.use(Vuelidate)

new Vue({
  render: h => h(Site)
}).$mount('#app')
