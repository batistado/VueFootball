<template>
    <el-table v-show="!error"
              :data="data"
              border
              stripe
              height="250">
        <slot/>
    </el-table>
</template>

<script>
    export default {
        name: "table-component",
        props: {
            getUrl: { type: String, default: null },
        },
        data() {
            return {
                loading: false,
                getDataPromise: null,
                error: null,
                data: [],
            }
        },
        methods: {
            loadData() {
                this.loading = true;
                console.log(this.getUrl);
                this.getDataPromise = this.http.get(this.getUrl)
                    .then((response) => {
                        response.data.list.forEach((x) => { this.data.push(x); });
                        this.error = null;
                        this.loading = false;
                    })
                    .catch(() => {
                        this.loading = false;
                        this.error = 'Error loading';
                    });
            },
        },
        created() {
            if (this.getUrl){
                this.loadData();
            }
        }
    };
</script>

<style scoped>

</style>