import VueRouter from 'vue-router';

let routes = [
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

export default new VueRouter({
    routes
});
