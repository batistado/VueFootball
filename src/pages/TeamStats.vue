<template>
    <el-card v-loading="loading">
        <el-row>
            <el-col :span="12">
                <el-card>
                    <h2>{{data.name}}</h2>
                    <el-row>
                        <el-col :span="12">
                            <label>Manager:</label>
                            {{data.manager || 'Unknown'}}
                            <br/>
                            <label>Stadium:</label>
                            {{data.stadium || 'Unknown'}}
                            <br/>
                            <label>Location:</label>
                            {{data.location || 'Unknown'}}
                        </el-col>
                        <el-col :span="12">
                    <img :src="imgUrl" :alt="`${this.data.name} image`"/>
                        </el-col>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card>
                    <h2>Star Player:</h2>
                </el-card>
            </el-col>
        </el-row>
        <player-table-prototype :getUrl="getUrl" :title="title"></player-table-prototype>
    </el-card>
</template>

<script>
    import PlayerTablePrototype from "~/components/PlayerTablePrototype/PlayerTablePrototype.vue";

    export default {
        components: {
            PlayerTablePrototype
        },
        name: "team-stats",
        data() {
            return {
                loading: false,
                getDataPromise: null,
                error: null,
                data: {},
            }
        },
        methods: {
            loadData(url) {
                this.loading = true;
                this.getDataPromise = this.http.get(url)
                    .then((response) => {
                        this.data = response.data;
                        this.imgUrl = require(`../assets/teams/${this.data.logo}`);
                        this.error = null;
                        this.loading = false;
                    })
                    .catch(() => {
                        this.loading = false;
                        this.error = 'Error loading';
                    });
            },
        },
        created() {
            this.teamId = this.$route.params.teamId;
            this.title = 'Roster';
            this.getUrl = `/teams/${this.teamId}/players`;
            this.loadData(`/teams/${this.teamId}`);
        }
    }
</script>

<style scoped>

</style>