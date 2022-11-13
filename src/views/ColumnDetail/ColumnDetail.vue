<template>
  
  <div class="max-w-screen-xl mx-auto">
      <!-- <div class="mx-auto flex justify-center items-center w-2/3 border-b pb-6">
        <div class="">
          <img src="https://q1.qlogo.cn/g?b=qq&nk=1034558980&s=640" class="box-border inline-block border rounded-full" width="150" height="150" />
        </div>
        <div class="ml-6 border flex justify-center flex-col w-2/3 h-full ">
          <h4 class="text-2xl mb-1">默认名字</h4>
          <p class="overflow-ellipsis overflow-hidden  text-gray-600 text-md">Loremver commodi debitis hic illo, voluptas aperiam iure in eius voluptatem reiciendis dolore. Lorem ipsum ipsumipsumipsumdolor si</p>
        </div>
      </div>
      
      <div class="mt-6 border shadow rounded p-4 w-2/3 mx-auto">
        <h4>
          <a href="#" class="text-2xl">默默认标题默认标题默认标题认标题</a>
        </h4>
        <div class="mt-4 border border-red-500 flex justify-between items-center">
          <div class="border border-blue-500 w-1/5">
            <img src="https://q1.qlogo.cn/g?b=qq&nk=1034558980&s=640" class="w-full" alt="">
          </div>
          <p class="text-gray-600 w-4/5 pl-6 pr-2 overflow-ellipsis overflow-hidden">我在学校学语if的正常语态和虚拟语态句型。 英语中最早学习的复杂句型…我在学校学语法的时候，最让我头疼的就是各种语法的专有名词，状语，同位语，动名词，动词分词，这些听上去很高大上的称谓到底是什么？这篇文章会分三次推送给，先从什么是状语说起，然后再深入聊聊if的正常语态和虚拟语态句型。 英语中最早学习的复杂句型…我在学校学语法的时候，最让我头疼的就是各种语法的专有名词，状语，同位语，动名词，动词分词，这些听上去很高大上的称谓到底是什么？这篇文章会分三次推送给，先从什么是状语说起，然后再深入聊聊if的正常语态和虚拟语态句型。 英语中最早学习的复杂句</p>
        </div>

        <span class="text-gray-500">2020-08-21 19:20:00</span>
      </div>

      <div class="mt-4 border shadow rounded p-4 w-2/3 mx-auto">
        <h4>
          <a href="#" class="text-2xl">默默认标题默认标题默认标题认标题</a>
        </h4>
        <div class="mt-4 border border-red-500 flex justify-between items-center">
          <div class="border border-blue-500 w-1/5">
            <img src="https://q1.qlogo.cn/g?b=qq&nk=1034558980&s=640" class="w-full" alt="">
          </div>
          <p class="text-gray-600 w-4/5 pl-6 pr-2 overflow-ellipsis overflow-hidden">我在学校学语if的正常语态和虚拟语态句型。 英语中最早学习的复杂句型…我在学校学语法的时候，最让我头疼的就是各种语法的专有名词，状语，同位语，动名词，动词分词，这些听上去很高大上的称谓到底是什么？这篇文章会分三次推送给，先从什么是状语说起，然后再深入聊聊if的正常语态和虚拟语态句型。 英语中最早学习的复杂句型…我在学校学语法的时候，最让我头疼的就是各种语法的专有名词，状语，同位语，动名词，动词分词，这些听上去很高大上的称谓到底是什么？这篇文章会分三次推送给，先从什么是状语说起，然后再深入聊聊if的正常语态和虚拟语态句型。 英语中最早学习的复杂句</p>
        </div>
        <span class="text-gray-500">2020-08-21 19:20:00</span>
      </div> -->
    <column-info class="mt-6 mb-8"/>
    <template v-for="index in 2">
      <column-item />
    </template>
  </div>


  <pre>{{route}}</pre>

</template>

<script lang="ts" setup>
import ColumnInfo from './cpns/ColumnInfo.vue';
import ColumnItem from './cpns/ColumnItem.vue';
import { useRoute, useRouter } from 'vue-router';



  // const  from 'vue-router'
  // const useRouter = useRouter()
  const route = useRoute()

</script>