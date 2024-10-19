<template>
    <v-card>
        <v-card-text>
            <v-textarea v-model="text" />
        </v-card-text>
        <v-card-actions>
        <v-btn @click="test">
            test
        </v-btn>
        <v-btn @click="hello">
            hello
        </v-btn>
        <v-btn @click="moment">
            moment
        </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import moment from 'moment';
    export default {
        data() {
            return  {
                text: 'wwww' // v-model과 동일한 변수명으로 변경
            }
        },
        methods: {
            async test() {
                const r = await this.$axios.get('/api')
                this.text = r.data
            },
            async hello() {
                const r = await this.$axios.get('/api/hello')
                this.text = r.data
            },
            moment() {
                this.text = moment()
                    .toDate()
                    .toLocaleDateString(); // 현재 날짜를 로컬 날짜 형식으로 변환
            }
        }
    }
</script>
