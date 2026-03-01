<script setup lang="ts">
import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="container-app">
    <Header/>
    <Body/>
    <Footer/>
  </div>
</template>

<style scoped>
.container-app {
  display: grid;
  min-height: 100dvh;
  grid-template-rows: auto 1fr auto;
}
</style>
