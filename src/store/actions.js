import {fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo} from '../api/index'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(response => {
                console.log(response.data);
                context.commit('SET_NEWS', response.data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_JOBS(context){
        fetchJobsList()
            .then(response => {
                context.commit('SET_JOBS', response.data);
            })
            .catch(error => {
                console.log(error);
            })
    },
    FETCH_ASKS(context){
        fetchAskList()
            .then(response => {
                context.commit('SET_ASK', response.data);
            }).catch(error => {
                console.log(error);
            })
    },
    FETCH_USER({context}, name){
        fetchUserInfo(name)
            .then(response => {
                context.commit('SET_USER', response.data);
            }).catch(error => {
                console.log(error);
            })
    }
}