<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="2">
        <el-menu
                mode="vertical"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          >
          <el-menu-item index="1" :route="{name: 'homePage'}" :disabled="false">
            Home Page
          </el-menu-item>
          <el-menu-item index="2" :route="{name: 'statsCentre'}" :disabled="false">
            Stats Centre
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18">
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
