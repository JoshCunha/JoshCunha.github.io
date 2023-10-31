import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';
import Home from './Home.vue';
// import WorkExperience from './components/Pages/WorkExperience.vue';
// import Skills from './components/Pages/Skills.vue';
// import AllReviews from './components/Pages/Reviews/AllReviews.vue';

// styles
import './styles/main.scss';
import 'normalize.css';
import './styles/TableStyle.scss';
import 'primeicons/primeicons.css';

const routes = [
    { path: '/', component: Home }
    // { path: '/workexperience', component: WorkExperience },
    // { path: '/skills', component: Skills },
    // { path: '/reviews', component: AllReviews }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    // eslint-disable-next-line
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            window.scrollTo(0, 0);
        }
    }
});

const app = createApp(App);
app.use(router);
app.mount('#app');
