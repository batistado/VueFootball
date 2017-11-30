<template>
    <div class="table-component" v-loading="loading" element-loading-text="Loading...">
        <el-row>
            <el-col :span="12">
                <div class="table-component__title">
                    <slot name="title"><h2>{{title}}</h2></slot>
                </div>
            </el-col>

            <el-col :span="12">
                <el-input id="searchBox" placeholder="Search" v-model="searchInput"
                          class="table-component__search" prefix-icon="el-icon-search"
                          v-if="searchEnabled && !error"></el-input>

            </el-col>
        </el-row>
        <el-row>
            <div class="table-component__placeholder" v-show="error">
                <div class="table-component--error" v-show="error">{{error}}</div>
            </div>
            <el-table v-show="!error"
                      :data="filteredData"
                      border
                      stripe>
                <slot></slot>
            </el-table>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "table-component",
        props: {
            getUrl: {type: String, default: null},
            title: {type: String, default: ''},
            searchEnabled: {type: Boolean, default: true},
        },
        data() {
            return {
                loading: false,
                getDataPromise: null,
                error: null,
                data: [],
                searchInput: '',
            }
        },
        computed: {
            filteredData() {
                if (this.searchInput === '' || this.searchInput.length === 0) {
                    return this.data;
                }
                const searchProps = Object.keys(this.data[0]);
                this.searchInput = this.searchInput.toLowerCase();
                return this.data.filter(o => searchProps.some(key => typeof o[key] === 'string'
                    && o[key].toLowerCase().match(this.searchInput)));
            }
        },
        methods: {
            loadData() {
                this.loading = true;
                this.getDataPromise = this.http.get(this.getUrl)
                    .then((response) => {
                        response.data.list.forEach((x) => {
                            this.data.push(x);
                        });
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
            if (this.getUrl) {
                this.loadData();
            }
        }
    };
</script>

<style scoped>
    .table-component__title {
        flex: 1 1 auto;
    }

    .table-component__search {
        flex: 0 0 300px;
        width: 300px;
        float: right;
    }

    .table-component__placeholder {
        align-items: center;
        display: flex;
        flex-flow: row;
        font-size: 30px;
        height: 120px;
        justify-content: center;
    }

</style>