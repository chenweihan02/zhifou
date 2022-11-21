<template>
  <div class="pic border border-red-500">
    <div class="relative" style="padding-bottom: 33.3%">
      <div class="absolute top-0 left-0 w-full h-full">
        <img class="w-full h-full object-cover" src="https://pic1.zhimg.com/v2-a9cea01a80e752808aed57f9381d4bbf_r.jpg?source=172ae18b" />
        <!-- <img class="w-full h-full object-cover" :src="currentPost.img_url" /> -->
      </div>
    </div>
  </div>

  <div class="border max-w-screen-xl mx-auto mb-80">
    <div class="w-3/4 mx-auto border border-red-500">
      <h1 class="mt-6 font-bold text-2xl">
        <!-- {{ currentPost.title }} -->
        12333333333
      </h1>


      <div class="mt-5 flex justify-between items-center">
        <div class="flex">
          <img class="border" src="@/assets/avatar.png" width="40" height="40">
          <div class="pl-4">
            <span class="block text-bold">稚晖君</span>
            <span class="block text-sm text-gray-600">科技盐选员</span>
          </div>
        </div>
        <div>
          <span class="bg-gray-400 text-white text-sm px-6 py-2.5 rounded">已关注</span>
        </div>
      </div>

      <div>
        内容内容
      </div>

      <div class="text-gray-500 text-sm">
        编辑于<span class="pl-2">2022-11-11 11:11</span>
      </div>

      <div class="tag space-x-2">
        <span class="con">深度学习（Deep Learning）</span>
        <span class="con">工作站（Workstation）</span>
      </div>
    </div>
  </div>

  <post-bottom></post-bottom>
  <post-quick-comment></post-quick-comment>
  <post-comment></post-comment>
  <pre>{{route}}</pre>
</template>


<style scoped>
  .con {
    @apply inline-block px-2 py-1.5 bg-blue-100 text-blue-600 text-sm rounded-2xl
  }
</style>


<script lang="ts" setup>
  import { onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import { PostProps, GlobalDataProps  } from '@/store/types';

  import PostBottom from './cpns/PostBottom.vue'
  import PostQuickComment from './cpns/PostQuickComment.vue'
  import PostComment from './cpns/PostComment.vue';

  const route = useRoute()

  const store = useStore<GlobalDataProps>()
  const currentId = route.params.id

  // onMounted(() => {
  //   store.dispatch('fetchPost', currentId)
  //   console.log('fetch===========')
  // })

  // const currentPost = computed<PostProps>(() => store.getters.getCurrentPost(currentId))


</script>