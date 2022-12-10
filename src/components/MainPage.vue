<template>
  <div class="full">
    <el-menu class="sticky" :default-active="activeIndex" mode="horizontal" :ellipsis="false" router>
      <img class="logo-cls" src="../assets/logo.png" />
      <div class="flex-grow" />
      <div v-if="isLogin" class="uid">当前登录用户：{{showUid}}</div>
      <div v-if="!isLogin" class="uid">当前未登录</div>
      <el-menu-item :disabled="!isLogin" index="/sort">推荐列表</el-menu-item>
      <el-menu-item :disabled="!isLogin" index="/recall">召回列表</el-menu-item>
      <el-menu-item :disabled="!isLogin" index="/history">观看历史</el-menu-item>
      <div class="mrg-right" />
    </el-menu>
    <LoginPage v-if="!isLogin" @login="handelLogin"/>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router"
import LoginPage from './LoginPage.vue'

const router = useRouter()
const activeIndex = ref('')
const isLogin = ref(false)
const showUid = ref('')

const handelLogin = function(uid) {
  console.log('======>' + uid);
  sessionStorage.setItem('bmr-uid', uid)
  showUid.value = uid
  isLogin.value = true
  activeIndex.value = '/history'
  router.push("/history")
}


</script>

<style>
.uid {
  height: 56px;
  line-height: 56px;
  color: #333;
  margin-right: 20px;
}
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
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
}
</style>
