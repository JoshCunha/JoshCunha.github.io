import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Home from './Home.vue';
import WorkExperience from './components/Pages/WorkExperience.vue';

// styles
import 'normalize.css';
import './styles/TableStyle.scss';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const routes = [
    { path: '/', component: Home },
    { path: '/workexperience', component: WorkExperience }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
