<template>
  <div v-for="post in posts" :key="post._id"
    class="mt-6 border shadow rounded p-4 w-2/3 mx-auto">
    <h4>
      <a href="#" class="text-2xl">{{ post.title }}</a>
    </h4>
    <div class="mt-4 border border-red-500 flex items-center">
      <div class="border border-red-500 w-80 h-48 overflow-hidden">
        <!-- w-80 20rem ~320px -->
        <!-- 48 52 rem  198px-->
        <div class="relative" style="padding-bottom: 80%">
          <div class="absolute top-0 left-0 w-full h-full">
            <img class="w-full h-full object-cover" src="https://pic1.zhimg.com/v2-a9cea01a80e752808aed57f9381d4bbf_r.jpg?source=172ae18b">
          </div>
        </div>
        <!-- <img 
          src="https://q1.qlogo.cn/g?b=qq&nk=1034558980&s=640"
          width="200"
          height="100"
          alt=""> -->
      </div>
      <p class="text-gray-600 pl-6 pr-2 overflow-ellipsis overflow-hidden">
        {{ post.excerpt }}
      </p>
    </div>
    <span class="inline-block mt-2 text-gray-500">{{ post.created_time }}</span>
  </div>
</template>


<script lang="ts" setup>
  import { PostProps } from '@/store/types'
  import { PropType } from 'vue';

  defineProps({
    posts: {
      type: Array as PropType<PostProps[]>,
      required: true
    }
  })

</script>

