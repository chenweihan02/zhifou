<template>
  <div v-for="post in posts" :key="post._id"
    class="mt-6 border shadow rounded p-4 w-2/3 mx-auto">
    <h4>
      <a href="#" class="text-2xl">{{ post.title }}</a>
    </h4>
    <div class="mt-4 border border-red-500 flex items-center">
        <img 
          src="https://q1.qlogo.cn/g?b=qq&nk=1034558980&s=640"
          width="200"
          height="100"
          alt="">
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

