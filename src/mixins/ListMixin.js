//mixin
export default {
    // 재사용 컴포넌트 옵션
    created(){
        this.$store.dispatch('FETCH_LIST', this.$route.name)
            .then(() => {
                console.log('fetched');
            }).catch((error) => {
                console.log(error);
            }); 
    },
}

