import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import Ahcomponents from "@chancheng/components";
import AhProSqlTipTree from "@chancheng/pro-sqltiptree";
import "./styles/index.less";
import "./utils";

Vue.config.productionTip = false;

Vue.use(Ahcomponents);
Vue.use(AhProSqlTipTree);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
