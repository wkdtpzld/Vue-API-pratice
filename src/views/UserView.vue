<template>
    <div>
        UserView
    </div>
</template>

<script>
import { mapGetters } from 'vuex';


export default {
    computed: {
        ...mapGetters({
            UserInfo: ''
        })
    },
    created() {
         this.$store.dispatch('FETCH_USER');
    }
}
</script>

<style>

</style>