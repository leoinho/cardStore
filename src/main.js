import Vue from 'vue'
import App from './App.vue'
import VueParticles from 'vue-particles'

// import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);
import VueCarousel from '@chenfengyuan/vue-carousel';

Vue.use(VueCarousel);
Vue.use(VueParticles)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
