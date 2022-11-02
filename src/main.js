import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import VueApexCharts from "vue-apexcharts";
import { PrivateLayout, PublicLayout } from "./layout";

Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);
Vue.component("PublicLayout", PublicLayout);
Vue.component("PrivateLayout", PrivateLayout);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
