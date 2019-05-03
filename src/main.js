import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'amfe-flexible'
import axios from 'axios';
import { Button } from 'vant'
import { Field } from 'vant';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);
Vue.use(Field);
import { Row, Col } from 'vant';
import { AddressEdit } from 'vant';
Vue.prototype.$axios=axios;
//这句话意思就是在vue的原型链上加一个$axios属性，让他等于你引用的 掉用就是this.$axios this指向这个vue
Vue.use(AddressEdit);
Vue.use(Row).use(Col);
Vue.use(Button);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

