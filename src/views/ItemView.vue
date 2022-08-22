<template>
    <section>
        <!-- 사용자 상세 정보-->
        <UserProfile>
            <template v-slot:username>
                <router-link :to="`/user/${ItemDetail.user}`">
                    {{ ItemDetail.user }}
                </router-link>    
            </template>
            <template v-slot:time>{{ ItemDetail.time_ago }}</template>
        </UserProfile>        
    </section>
    <section>
        <h2>{{ ItemDetail.title }}</h2>
    </section>
    <section>
        <!-- 댓글 영역-->
        <div v-html="ItemDetail.content">
            
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile.vue';
export default {
    components: {
        UserProfile
    },
    computed: {
        ...mapGetters({
            ItemDetail: 'fetchedItem'
        })
    },
    created() {
        const id = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM', id);
    }
}
</script>

<style scpoed>
.user-container {
    display: flex;
    align-content: center;
    padding: 0.5rem;
}

.fa-user {
    font-size: 2.5rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}
</style>