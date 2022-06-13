import Vuex from 'vuex';
import actions from './actions.js'
import mutations from './mutations'

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: []
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        },
        fetchedNews(state) {
            return state.news;
        },
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedUser(state) {
            return state.user;
        }
    },
    mutations,
    actions,
});

 