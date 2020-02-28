import Vue from 'vue'
import App from './App.vue'
import Home from './views/home/Home.vue'
import Sucesso from './views/sucesso/Sucesso.vue'
import VueParticles from 'vue-particles'

// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);
import VueCarousel from '@chenfengyuan/vue-carousel';
import VueRouter from 'vue-router'

import VuePrlx from 'vue-prlx'
Vue.use(VuePrlx);
import { VuePrlxDirective } from 'vue-prlx'
Vue.directive('prlx', VuePrlxDirective);

Vue.use(VueRouter)
Vue.use(VueCarousel);
Vue.use(VueParticles)

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: 'history',
  hash: false,
  routes: [
    { path: '/', component: Home },
    { path: '/sucesso', component: Sucesso }
  
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
