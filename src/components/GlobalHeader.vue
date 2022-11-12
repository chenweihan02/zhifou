<template>
  <div class="bg-blue-600 h-14">
    <div class="flex max-w-screen-xl mx-auto justify-between h-full items-center">
      <h1 class="text-xl text-white">知否知否</h1>
      <!-- v-if="!user.isLogin" -->
      <div v-if="!isLogin">
        <a class="btn" href="#">登录</a>
        <a class="btn" href="#">注册</a>
      </div>
      <div v-else>
        <a class="btn" href="#">你好 xxx</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import { defineComponent, PropType, ref } from 'vue';

//  interface UserProps {
//     isLogin: boolean
//     name?: string
//     id?: number
//   }

  const isLogin = ref(true)

  // defineProps ({
  //     user: {
  //       type: Object as PropType<UserProps>,
  //       required: true
  //    }
  // })

//   export interface UserProps {
//     isLogin: boolean
//     name?: string
//     id?: number
//   }

//  export default defineComponent({
//    name: 'GlobalHeader',
//    props: {
//      user: {
//       type: Object as PropType<UserProps>,
//       required: true
//      }
//    }
//  })


</script>


<style scoped>
  .btn {
    @apply border px-4 py-2 text-white rounded mx-1 hover:text-black hover:bg-white
  }

</style>
