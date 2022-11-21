<template>
  <div class=" border max-w-screen-xl w-full mx-auto">
    <div class="border px-5 py-3 w-3/4 mx-auto text-sm text-gray-500">
      <div class="border-b flex justify-between items-center">
        <div>318条评论</div>
        <div class="bg-gray-300 p-0.5 rounded-sm">
          <span class="con active bg-white">默认</span>
          <span class="con">最新</span>
        </div>
      </div>
      <div class="mt-3">
        <!-- 一个的评论 2级评论 -->
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style  scoped>
  .con {
    @apply inline-block px-3 py-0.5 text-xs
  }
  .active {
    @apply font-bold bg-white rounded-sm
  }
</style>