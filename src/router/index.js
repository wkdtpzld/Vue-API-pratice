import { createRouter, createWebHistory } from 'vue-router';
import NewsView from '../views/NewsView.vue';
import AskView from '../views/AskView.vue';
import JobsView from '../views/JobsView.vue';
import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import { store } from '../store/index';

const routes = [
    {
        path: '/news',
        name: 'news',
        component: NewsView,
        beforeEnter: (to, from, next) => {
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    console.log('fetched');
                    next();
                }).catch((error) => {
                    console.log(error);
                }); 
        }
    },
    {
        path: '/ask',
        name: 'ask',
        component: AskView,
        beforeEnter: (to, from, next) => {
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    console.log('fetched');
                    next();
                }).catch((error) => {
                    console.log(error);
                }); 
        }
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: JobsView,
        beforeEnter: (to, from, next) => {
            store.dispatch('FETCH_LIST', to.name)
                .then(() => {
                    console.log('fetched');
                    next();
                }).catch((error) => {
                    console.log(error);
                }); 
        }
    },
    {
        path: '/user/:id',
        component: UserView
    },
    {
        path: '/item/:id',
        component: ItemView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router
