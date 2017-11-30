<script>
    import PlayerTablePrototype from '../PlayerTablePrototype/PlayerTablePrototype.vue';

    export default {
        components: {PlayerTablePrototype},
        name: "players-table",

        extends: PlayerTablePrototype,

        created() {
            this.url = `/players`;
            this.heading = 'Available Players';
        }
    }
</script>