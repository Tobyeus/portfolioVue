import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';

import Home from './components/pages/Home.vue';
import Projects from './components/pages/ProjectsView.vue';
import AboutMe from './components/pages/AboutMe.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/portfolioDeploy', component: Home,
        },
        {
            path: '/portfolioDeploy/projects', component: Projects,
        },
        {
            path: '/portfolioDeploy/about', component: AboutMe
        }
    ]
});

export default router;