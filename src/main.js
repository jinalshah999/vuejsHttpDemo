import Vue from 'vue'
import viewresoure from 'vue-resource';
import App from './App.vue'
import products from './Components/products.vue';

Vue.use(viewresoure);
Vue.http.options.root='https://rkdemotask.herokuapp.com/tasks/';//set url
//Vue.http.options.headers().set('Content-Type','application/json');
Vue.component('app-products',products);
new Vue({
  el: '#app',
  render: h => h(App)
})
