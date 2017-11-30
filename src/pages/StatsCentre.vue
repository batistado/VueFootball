<template>
<div>
    <table-component getUrl="teams">
        <el-table-column prop="name" label="Name" width="180"></el-table-column>
        <el-table-column prop="id" label="S.No." width="180"></el-table-column>
    </table-component>
</div>
</template>

<script>
    import TableComponent from "~/components/TableComponent/TableComponent.vue";

    export default {
        components: {TableComponent},
        name: "stats-centre"
    }
</script>