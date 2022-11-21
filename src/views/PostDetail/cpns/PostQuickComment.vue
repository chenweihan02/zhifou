<template>
  <div class=" border max-w-screen-xl w-full mx-auto">
    <div class="flex w-3/4 mx-auto text-sm text-gray-500">
      <div>
        <img class="border border-red-500 rounded" src="@/assets/avatar.png" width="40" height="40">
      </div>

      <div class="ml-3 border border-red-500 rounded w-full">
        <input 
          class="outline-none text-base px-3 py-2 w-full border-b"
          placeholder="写评论等7人关注了作者"
          value="写评论"/>

        <div class="flex justify-between px-3 py-1 items-center">
          <div class="space-x-2">
            <span>图片1</span>
            <span>图片2</span>
            <span>图片3</span>
            <span>图片4</span>
            <span>图片5</span>
          </div>
          <span class="inline-block bg-blue-600 text-white px-3 py-1 rounded">发布</span>
        </div>
      </div>

      
    </div>
  </div>
</template>


<script lang="ts" setup>
import ValidateInput from '@/components/ValidateInput.vue';


</script>