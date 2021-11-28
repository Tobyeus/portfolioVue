import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';

import Home from './components/pages/Home.vue';
import Projects from './components/pages/ProjectsView.vue';
import AboutMe from './components/pages/AboutMe.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home', component: Home,
        },
        {
            path: '/projects', component: Projects,
        },
        {
            path: '/about', component: AboutMe
        },
        {
            path: '/:catchAll(.*)' , redirect: '/home'
        }
    ]
});

export default router;