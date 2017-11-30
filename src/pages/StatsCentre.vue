<template>
    <div>
        <h1>Welcome to the Stats Centre.</h1>
        <teams-table></teams-table>
        <players-table></players-table>
    </div>
</template>

<script>
    import TeamsTable from '../components/TeamsTable/TeamTable.vue';
    import PlayersTable from "~/components/PlayersTable/PlayersTable.vue";

    export default {
        components: {
            PlayersTable,
            TeamsTable
        },
        name: "stats-centre"
    }
</script>