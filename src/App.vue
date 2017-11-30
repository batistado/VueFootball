<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="5">
        <el-menu
                mode="vertical"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          >
          <el-menu-item index="1" :disabled="false">
            <template>
              <router-link :to="{ name: 'homePage' }">
                Homepage
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
      <el-col :span="19">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>


export default {
    name: 'app',
};
</script>
