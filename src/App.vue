<template>
    <global-header :user="currentUser"/>

    <router-view></router-view>

    <global-footer />
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import GlobalHeader from './components/GlobalHeader.vue'
  import GlobalFooter from './components/GlobalFooter.vue'
  import { computed } from '@vue/reactivity'
  import store from './store'


  const currentUser = computed(() => store.state.user)




</script>


<style scoped>
</style>
