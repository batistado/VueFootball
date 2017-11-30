<template>
    <div>
        <el-row :gutter="5">
            <el-col :span="4">
                <el-menu class="nav-bar">
                    <el-menu-item index="1" :disabled="false">
                        <template>
                            <router-link :to="{ name: 'homePage' }">
                                Home
                            </router-link>
                        </template>
                    </el-menu-item>
                    <el-menu-item index="2" :disabled="false">
                        <template>
                            <router-link :to="{ name: 'statsCentre' }">
                                Stats Centre
                            </router-link>
                        </template>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="20">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'app',
    };
</script>

<style scoped>
    .nav-bar {
        background-color: #545c64;
        text-color: #fff;
        active-text-color: #ffd04b;
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow-x: hidden;
        visibility: visible !important;
        z-index: 100;
    }

    el-menu-item {
        vertical-align: middle;
    }
</style>
