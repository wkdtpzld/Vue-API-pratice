<template>
    <div>
        <p v-for="job in JobItems" v-bind:key="job">
            <a :href="job.url">{{job.title}}</a>
            <small>{{ job.time_ago }} by {{ job.domain }}}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            JobItems: 'fetchedJobs'
        })
    },  
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>