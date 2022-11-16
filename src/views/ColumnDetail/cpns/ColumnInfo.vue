<template>
  <div class="mx-auto flex justify-center items-center w-2/3 border-b pb-6">
    <div class="">
      <img src="https://q1.qlogo.cn/g?b=qq&nk=1034558980&s=640" class="box-border inline-block border rounded-full"
        width="150" height="150" />
    </div>
    <div class="ml-6 border flex justify-center flex-col w-2/3 h-full ">
      <h4 class="text-2xl mb-1">{{ name }}</h4>
      <p class="overflow-ellipsis overflow-hidden  text-gray-600 text-md">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    name: {
      type: String,
      default: '默认专栏名字'
    },
    description: {
      type: String,
      default: '默认专栏简介'
    }
  })
</script>

