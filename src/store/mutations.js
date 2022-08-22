export default {
    SET_NEWS(state, data) {
        state.news = data;
        state.newsName = 'news'; 
        state.jobsName = ''; 
        state.askName = '';
    },
    SET_JOBS(state, data){
        state.jobs = data;
        state.newsName = ''; 
        state.jobsName = 'jobs'; 
        state.askName = ''; 
    },
    SET_ASK(state, data){
        state.ask = data;
        state.newsName = ''; 
        state.jobsName = ''; 
        state.askName = 'ask'; 
    },
    SET_USER(state, data){
        state.user = data;
    },
    SET_ITEM(state, data){
        state.item = data;
    },
    SET_LIST(state, data){
        state.list = data
    }
}