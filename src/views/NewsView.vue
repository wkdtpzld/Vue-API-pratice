<template>
    <div>
        <p v-for="news in NewsItems" v-bind:key="news">
            <a :href="news.url">{{news.title}} </a>
            <small>
                {{news.time_ago}} by 
                <router-link v-bind:to="`/user/${news.user}`"> {{news.user}} </router-link>
            </small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            NewsItems: 'fetchedNews'
        })
    },
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>