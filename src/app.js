window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.component('app', require('./components/App.vue'));

import router from './routes';

new Vue({
    el: '#app',
    router
});
