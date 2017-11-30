<template>
<div>
    <table-component getUrl="teams" title="Available Teams">
        <el-table-column prop="id" label="S.No."></el-table-column>
        <el-table-column prop="name" label="Name"></el-table-column>
    </table-component>
</div>
</template>

<script>
    import TableComponent from "~/components/TableComponent/TableComponent.vue";

    export default {
        components: {TableComponent},
        name: "team-table"
    }
</script>