import HomePage from './pages/HomePage.vue';
import StatsCentre from './pages/StatsCentre.vue';

export default {
    routes: [
        {
            path: '/',
            name: 'homePage',
            component: HomePage,
        },
        {
            path: '/statsCentre',
            name: 'statsCentre',
            component: StatsCentre,
        },
    ],
};
