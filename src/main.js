import Vue from 'vue'
import App from './App.vue'
import {firestorePlugin} from "vuefire";  //추가함

Vue.use(firestorePlugin);   //추가함

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
