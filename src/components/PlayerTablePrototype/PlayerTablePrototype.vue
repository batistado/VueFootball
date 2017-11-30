<template>
    <table-component :getUrl="url" :title="heading">
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="rating" label="Rating"></el-table-column>
        <el-table-column prop="age" label="Age"></el-table-column>
        <el-table-column prop="position" label="Position"></el-table-column>
        <el-table-column prop="starter" label="Starting XI">
            <template slot-scope="scope">
                <el-switch
                        disabled
                        v-model="scope.row.starter"
                        active-color="#13ce66"
                        inactive-color="#ff4949">
                </el-switch>
            </template>
        </el-table-column>
    </table-component>
</template>

<script>
    import TableComponent from "~/components/TableComponent/TableComponent.vue";

    export default {
        components: {TableComponent},
        name: "player-table-prototype",
        props: {
            getUrl: {type: String, default: null},
            title: {type: String, default: ''},
            searchEnabled: {type: Boolean, default: true},
        },
        created() {
            this.url = this.getUrl;
            this.heading = this.title;
        }
    }
</script>

<style scoped>

</style>