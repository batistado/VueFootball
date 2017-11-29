<template>
    <table-component getUrl="teams">
        <el-table-column
                prop="id"
                label="S.No."
                width="180"></el-table-column>
            <el-table-column
                    prop="name"
                    label="Name"
                    width="180"></el-table-column>
    </table-component>
</template>

<script>
    export default {
        name: "stats-centre"
    }
</script>