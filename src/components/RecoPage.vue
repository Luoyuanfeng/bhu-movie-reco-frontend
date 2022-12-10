<template>
    <div>
        <MovieItem v-for="(item, index) in items" :key="index" :data="item"/>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, onMounted, onBeforeMount } from 'vue'
import MovieItem from './MovieItem.vue'
import net from '../net.js'
import { useRouter } from "vue-router"

const items = ref(null)

onMounted(() => {
  console.log('onMounted')
  net.sort((list) => {
    items.value = list
  })
})

onBeforeMount(() => {
  console.log('onBeforeMount')
  let uid = sessionStorage.getItem('bmr-uid')
  if (!uid) {
    useRouter().replace('/')
  }
})

</script>

<style>

</style>