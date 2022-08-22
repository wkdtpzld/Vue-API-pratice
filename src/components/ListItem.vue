<template>
    <div>
        <ul class="news-list">
            <li v-for="news in Items" v-bind:key="news" class="post">
                <!-- 포인트 영역 -->
                <div class="points">
                    {{ news.points || 0 }} 
                </div>
                <!-- 기타 정보 영역 -->
                <div>
                    <p class="news-title">
                        <template v-if="news.domain">
                            <a :href="news.url">
                                {{news.title}}
                            </a>
                        </template>
                        <template v-else>
                            <router-link v-bind:to="`/item/${news.id}`">
                                {{ news.title }}
                            </router-link>
                        </template>
                    </p>
                    <small class="link-text">
                        by <router-link v-bind:to="`/user/${news.user}`" class="link-text"> {{news.user}} </router-link>
                    </small>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            Items: 'fetchedList'
        })
    },
}
</script>

<style scoped>
.news-list {
    margin: 0;
    padding: 0;
}

.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}

.points{
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883
}

.news-title {
    margin: 0;
}

.link-text {
    color : #828282
}
</style>