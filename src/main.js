import Vue from 'vue'
import App from './App.vue'
import Home from './views/home/Home.vue'
import Sucesso from './views/sucesso/Sucesso.vue'
import VueParticles from 'vue-particles'

// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);
import VueCarousel from '@chenfengyuan/vue-carousel';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(VueCarousel);
Vue.use(VueParticles)

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/sucesso', component: Sucesso }
  
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
