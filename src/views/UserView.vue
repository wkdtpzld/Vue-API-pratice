<template>
    <div>
        <UserProfile>
            <template v-slot:username>{{ userInfo.id }}</template>
            <template v-slot:time><span>Posted {{ userInfo.created }}</span></template>
            <template v-slot:karma><span>{{ userInfo.karma }}</span></template>
        </UserProfile>
    </div>
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
            userInfo: 'fetchedUser', 
        })
    },
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>

<style>

</style>