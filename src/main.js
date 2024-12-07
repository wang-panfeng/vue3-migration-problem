import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
import { configureCompat } from "vue";
// 禁用某些兼容性特性
configureCompat({
  COMPONENT_V_MODEL: false,
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
