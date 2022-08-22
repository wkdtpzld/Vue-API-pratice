import {fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo, fetchItemDetail, fetchList} from '../api/index'

export default {
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },
    async FETCH_JOBS(context){
        const response = await fetchJobsList();
        context.commit('SET_JOBS', response.data);
        return response; 
    },
    async FETCH_ASKS(context){
        const response = await fetchAskList();
        context.commit('SET_', response.data);
        return response; 
    },
    async FETCH_USER(context, name){
        const response = await fetchUserInfo(name);
        context.commit('SET_USER', response.data);
        return response;
    },
    async FETCH_ITEM(context, id){
        const response = await fetchItemDetail(id);
        context.commit('SET_ITEM', response.data);
        return response;
    },
    async FETCH_LIST(context, name){
        const response = await fetchList(name);
        context.commit('SET_LIST', response.data);
        return response
    }
}