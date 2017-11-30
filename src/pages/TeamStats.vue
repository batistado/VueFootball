<template>
    <player-table-prototype :getUrl="getUrl" :title="title"></player-table-prototype>
</template>

<script>
    import PlayerTablePrototype from "~/components/PlayerTablePrototype/PlayerTablePrototype.vue";

    export default {
        components: {PlayerTablePrototype},
        name: "team-stats",
        created() {
            this.teamId = this.$route.params.teamId;
            this.title = this.$route.params.teamName;
            this.getUrl = `/teams/${this.teamId}/players`
        }
    }
</script>

<style scoped>

</style>