import Vue from 'vue';
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        path: '',
        redirect: '/index',
    },
    {
        path: '/index',
        component: resolve => require(['@/views/index'], resolve),
        children: [
            {
                path: '/home',
                component: resolve => require(['@/views/home/Home'], resolve)
            }
        ]
    }
];

export default new Router({
    routes
});