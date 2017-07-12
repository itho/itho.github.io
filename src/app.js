import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuetify from 'vuetify';

window.Vue = Vue;
Vue.use(VueRouter);
Vue.use(Vuetify);

Vue.component('app', require('./components/App.vue'));

// import router from './routes';

const routes = [
    {
        path: '/', redirect: '/home'
    },
    {
        name: 'home',
        path: '/home',
        component: require('./components/Home.vue')
    },
    {
        name: 'about',
        path: '/about',
        component: require('./components/About.vue')
    },
    {
        name: 'contact',
        path: '/contact',
        component: require('./components/Contact.vue')
    },
    {
        name: 'portfolio',
        path: '/portfolio',
        component: require('./components/Portfolio.vue')
    },
    {
        path: '*',
        redirect: '/home'
    }
];

const router = new VueRouter({
    routes // short for `routes: routes`
});

const app = new Vue({
    router
}).$mount('#app');
