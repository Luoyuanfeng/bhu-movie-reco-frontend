<template>
    <div class="bg">
        <div style="margin-left: 25px">《{{props.data.name}}》- {{props.data.year}}</div>
        <div class="grow"></div>
        <div style="margin-right: 60px">MovieId {{props.data.id}}</div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps(['data'])

</script>

<style>
.bg {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-bottom: 10px;
}
.grow {
    flex-grow: 1
}
</style>