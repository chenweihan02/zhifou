<template>
    <global-header :user="currentUser"/>
    <!-- <modal /> -->
    <router-view></router-view>

    
    <!-- <message /> -->

    <global-footer />
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import GlobalHeader from './components/GlobalHeader.vue'
  import GlobalFooter from './components/GlobalFooter.vue'
  import Modal from './components/Modal.vue'
  import Message from './components/Message.vue'
  
  import { computed } from '@vue/reactivity'
  import store from './store'

  import createMessage from '@/hooks/useCreateMessage'

  const currentUser = computed(() => store.state.user)
  
  createMessage('123', 'default')



</script>


<style scoped>
</style>
