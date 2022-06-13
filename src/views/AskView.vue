<template>
    <div>
        <p v-for="item in askItems" v-bind:key="item">
            <a :href="item.url">
                {{item.title}}
            </a>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            askItems: 'fetchedAsk'
        })

        // ...mapState({
        //     ask: state => state.ask
        // })
    },  
    created() {
        this.$store.dispatch('FETCH_ASKS');
    }
}
</script>

<style>

</style>