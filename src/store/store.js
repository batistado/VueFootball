import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
    teams: [
        {
            name: 'Real Madrid',
            players: [
                {
                    name: 'Cristiano Ronaldo',
                    rating: 94,
                    position: 'Forward'
                }
            ]
        }
    ]
};

const mutations = {
    INCREMENT_COUNT(state) {
        state.count++;
    },
};

const actions = {
    incCount : ({ commit }) => commit('INCREMENT_COUNT'),
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});