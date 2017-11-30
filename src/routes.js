import HomePage from './pages/HomePage.vue';
import StatsCentre from './pages/StatsCentre.vue';
import TeamStats from './pages/TeamStats.vue';

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
        {
            path: '/teamStats/:teamId',
            name: 'teamStats',
            component: TeamStats,
        },
    ],
};
