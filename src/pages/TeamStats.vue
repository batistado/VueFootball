<template>
    <table-component :getUrl="`/teams/${teamId}/players`" :title="`${teamName} Roster:`">
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="rating" label="Rating"></el-table-column>
        <el-table-column prop="age" label="Age"></el-table-column>
        <el-table-column prop="position" label="Position"></el-table-column>
    </table-component>
</template>

<script>
    import TableComponent from "~/components/TableComponent/TableComponent.vue";

    export default {
        components: {TableComponent},
        name: "team-stats",
        created() {
            this.teamId = this.$route.params.teamId;
            this.teamName = this.$route.params.teamName;
        }
    }
</script>

<style scoped>

</style>