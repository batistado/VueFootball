<template>
<div>
    <teams-table></teams-table>
</div>
</template>

<script>
    import TeamsTable from '../components/TeamsTable/TeamTable.vue';

    export default {
        components: {TeamsTable},
        name: "stats-centre"
    }
</script>