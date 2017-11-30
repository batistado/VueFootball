import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const state = {
    teams: [],
};

const mutations = {
    INITIALIZE(state, data) {
        teams = data;
    }
};

const actions = {
    initializeTeams({commit}) {
        commit('INITIALIZE');
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions
});