<template>
  <div class="full">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handelSelect" :ellipsis="false" router>
      <img class="logo-cls" src="../assets/logo.png" />
      <div class="flex-grow" />
      <el-menu-item :disabled="!isLogin" index="/reco">推荐列表</el-menu-item>
      <el-menu-item :disabled="!isLogin" index="/history">观看历史</el-menu-item>
      <div class="mrg-right" />
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isLogin: false  
    }
  },
  setup (props, context) {
    return {}
  },
  name: 'MainPage'
}

</script>

<style>
.flex-grow {
  flex-grow: 1;
}
.logo-cls {
  width: 145px;
  height: 100%;
  margin-left: 20px;
  margin-top: 3px;
}
.full {
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
}
.mrg-right {
  width: 60px;
}
</style>
