<template>
    <div>
        <div v-for="ask in asks" v-bind:key="ask">{{ ask }}</div>
    </div>
</template>

<script>
import {fetchAskList} from '../api/index';

export default {
    data() {
        return {
            asks : []
        }
    },
    created() {
        let vm = this;
        fetchAskList()
            .then(response => {
                vm.asks = response.data
            }).catch(error => {
                console.log(error);
            })
    }
}
</script>

<style>

</style>