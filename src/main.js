import { createApp } from 'vue'
import App from './App.vue'
import Router from './router.js';

import BaseButton from './components/UI/BaseButton.vue';
import IconButton from './components/UI/IconButton.vue';

const app = createApp(App);

app.component('base-button', BaseButton).component('icon-button', IconButton);

app.use(Router);

app.mount('#app');
