<template>
    <global-header :user="currentUser"/>
    <!-- <modal /> -->
    <!-- <upload-file /> -->


    <loader v-show="isLoading" :text="'拼命加载中'"/>

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
  import UploadFile from './components/UploadFile.vue'
  
  import { computed } from '@vue/reactivity'
  import store from './store'

  import createMessage from '@/hooks/useCreateMessage'

  import Loader from './components/Loader.vue'

  const isLoading = computed(() => store.state.loading)

  const currentUser = computed(() => store.state.user)
  
</script>


<style scoped>
</style>
