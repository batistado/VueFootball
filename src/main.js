import Vue from 'vue';
import ElementUI from 'element-ui';
import Router from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import routes from "~/routes";
import store from './store/store';
import Axios from 'axios';

Vue.use(ElementUI);
Vue.use(Router);

// Import Components
const context = require.context('./components', true, /\.vue/);
context.keys().forEach((x) => {
    const component = context(x).default;
    if (component.name) {
        Vue.component(component.name, component);
    }
});

Vue.prototype.http = Axios.create({ baseURL: 'http://localhost:5000' });

new Vue({
    el: '#app',
    router: new Router(routes),
    store,
    render: h => h(App)
});
