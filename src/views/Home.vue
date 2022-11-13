<template>
  
  <div class="max-w-screen-xl mt-12 mx-auto border flex justify-center  flex-col items-center">
    <img src="@/assets/callout.svg" width="300" alt="">
    <button class="mt-6 rounded text-white pl-3.5 pr-3.5 pt-2 pb-2 bg-blue-600 hover:bg-blue-700">
      开始写文章
    </button>
  </div>

  <div>
    <span class="mt-20 mb-2 text-center block text-2xl">发现精彩</span>
    <column-list />

    <button class="block mx-auto mt-6 mb-10 rounded border border-blue-500 text-blue-500 pl-20 pr-20 pt-1.5 pb-1.5  hover:bg-blue-500 hover:text-white">
      加载更多
    </button>
  </div>

</template>



<script lang="ts" setup>

  import ColumnList from '@/components/ColumnList.vue';

</script>