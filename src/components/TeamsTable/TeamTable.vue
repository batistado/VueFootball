<template>
<div>
    <table-component getUrl="teams" title="Available Teams" :enableAggregation="true">
        <el-table-column prop="id" label="S.No."></el-table-column>
        <el-table-column prop="name" label="Name">
            <template slot-scope="scope">
                <router-link :to="{ name: 'teamStats', params: { teamId: scope.row.id, teamName: scope.row.name } }">
                    {{scope.row.name}}
                </router-link>
            </template>
        </el-table-column>
    </table-component>
</div>
</template>

<script>
    import TableComponent from "~/components/TableComponent/TableComponent.vue";

    export default {
        components: {TableComponent},
        name: "team-table",
    }
</script>