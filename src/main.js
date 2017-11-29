import Vue from 'vue';
import ElementUI from 'element-ui';
import Router from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import routes from "~/routes";
import store from './store/store';

Vue.use(ElementUI);
Vue.use(Router);

new Vue({
    el: '#app',
    router: new Router(routes),
    store,
    render: h => h(App)
});
