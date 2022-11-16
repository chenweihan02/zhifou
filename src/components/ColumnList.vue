<template>
   <!--  -->
  <div class="max-w-screen-xl mx-auto">
    <ul class="flex flex-wrap flex-row">
      <li class="w-1/3 flex-none  p-3" v-for="column in columnList" :key="column._id">
        <div class="shadow-md min-h-full p-4 border rounded-md border-black-500 box-border flex items-center flex-nowrap flex-col">
          <img class="w-16 rounded-full" :src="column.img_url" alt="column.title">
          <h5 class="mt-3 text-xl">{{ column.title }}</h5>
          <p class="text-gray-700 mt-3 text-center">{{ column.description }}</p>
          <a class=" mt-7 py-2 px-4 rounded-md border-2 border-gray-500 hover:border-blue-500" href="#">进入专栏</a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { ComputedRef, defineComponent, PropType } from 'vue';

  import { ColumnProps } from '@/store/types'
  import { computed } from '@vue/reactivity';


  // interface ColumnProps {
  //   id: number
  //   title: string
  //   avatar: string
  //   description: string
  // }


  const props = defineProps({
    list: {
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  })

  const columnList: ComputedRef<ColumnProps[]> = computed(() => {
    return props.list.map((item) => {
      if (!item.img_url) {
        item.img_url = 'http://127.0.0.1:5173/src/assets/callout.svg'
      }
      return item
    })
  })

  // defineComponent({
  //   name: 'ColumnList',
  //   props: {
  //     list: {
  //       type: Array as PropType<ColumnProps[]>,
  //       required: true
  //     }
  //   }
  // })

  // const testData: ColumnProps[] = [
  //   {
  //     id: 1,
  //     title: 'test1的专栏',
  //     description: '这是的test1专栏，有一段非常有te有意思的简介，可以更新一下欧',
  //     avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  //   },
  //   {
  //     id: 2,
  //     title: 'test2的专栏',
  //     description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
  //     avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  //   },
  //   {
  //     id: 3,
  //     title: 'test3的专栏',
  //     description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
  //     avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  //   }
  //   ,
  //   {
  //     id: 4,
  //     title: 'test4的专栏',
  //     description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
  //     avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  //   }
  // ]


</script>


<style lang="less" scoped>


</style>
