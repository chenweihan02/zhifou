<template>
  <div class="pic border border-red-500">
    <div class="relative" style="padding-bottom: 33.3%">
      <div class="absolute top-0 left-0 w-full h-full">
        <!-- <img class="w-full h-full object-cover" src="https://pic1.zhimg.com/v2-a9cea01a80e752808aed57f9381d4bbf_r.jpg?source=172ae18b" /> -->
        <img class="w-full h-full object-cover" :src="currentPost.img_url" />
      </div>
    </div>
  </div>

  <div class="border max-w-screen-xl mx-auto mb-80">
    <div class="w-3/4 mx-auto border border-red-500">
      <h1 class="mt-6 font-bold text-2xl">
        {{ currentPost.title }}
      </h1>
    </div>

  </div>
  <!-- <div class="fixed bottom-0 bg-gray-400 h-10 w-full">
    <div class="border max-w-screen-xl mx-auto">
      <div class="px-44">123</div>
    </div>
  </div> -->
  <pre>{{route}}</pre>
</template>

<script lang="ts" setup>
  import { onMounted, computed } from 'vue';
  import { useRoute } from 'vue-router';
  import { useStore } from 'vuex';
  import { PostProps, GlobalDataProps  } from '@/store/types';
  const route = useRoute()

  const store = useStore<GlobalDataProps>()
  const currentId = route.params.id

  onMounted(() => {
    store.dispatch('fetchPost', currentId)
    console.log('fetch===========')
  })

  const currentPost = computed<PostProps>(() => store.getters.getCurrentPost(currentId))


</script>