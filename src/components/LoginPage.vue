<template>
    <div class="login_bg">
        <div class="login_form">
            <div class="login_txt">登录</div>
            <el-form class="form_item" :model="form" label-width="0px" label-position="left" size="large">
                <el-form-item class="input" label="">
                    <el-input placeholder="请输入用户id" v-model="uid" clearable />
                </el-form-item>
                <el-form-item>
                    <el-button class="btn" type="primary" @click="handelClick">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'
const emit = defineEmits(['login'])

const uid = ref(null)

const handelClick = function  () {
    emit('login', uid.value)
}
</script>

<style>
.login_form {
    margin-top: 100px;
    width: 600px;
    border-radius: 10px;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
    background-color: white;
}

.login_bg {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login_txt {
    margin-top: 30px;
    font-size: 30px;
    color: #333333;
}

.form_item {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 20px;
}

.input {
    margin-top: 30px;
}

.btn {
    width: 100%;
    min-height: 45px;
    margin-top: 35px;
    margin-bottom: 10px;
}
</style>