import Vue from "vue";
import moment from "moment";
import axios from "axios";
import Vuex from "vuex";
import VueAxios from "vue-axios";

import App from "./App";
import store from "./store";

window.$store = store;

Vue.config.productionTip = false;

Vue.prototype.$moment = moment;
Vue.use(VueAxios, axios);
Vue.use(Vuex);

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
