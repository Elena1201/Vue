<script setup>
import HelloVue from '@/components/HelloVue.vue'
import Nav from './components/nav.vue'
</script>

<template>
  <Nav></Nav>
  <div class="row">
    <div class="col-3"><HelloVue></HelloVue></div>
      <div class="col-6">
        <router-view></router-view>
      </div>
  </div>








  <!-- <router-link to="/">Home</router-link> 
  <router-link to="/about">About</router-link>
  <hr />
  <router-view />
    <div class="col-3"><HelloVue></HelloVue></div> -->
</template>

<style scoped>

</style>
