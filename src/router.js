import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';

import Home from './components/pages/Home.vue';
import Projects from './components/pages/ProjectsView.vue';
import Contact from './components/pages/Contact.vue';

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
            path: '/portfolioDeploy/about', component: Contact
        }
    ]
});

export default router;