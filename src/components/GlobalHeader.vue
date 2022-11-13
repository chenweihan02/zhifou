<template>
  <div class="bg-blue-600 h-14">
    <div class="flex max-w-screen-xl mx-auto justify-between h-full items-center">
      
      <router-link to="/"><h1 class="text-xl text-white">知否知否</h1></router-link>


      <!-- v-if="!user.isLogin" -->
      <div v-if="!isLogin">
        <router-link to="/login" class="btn">登录</router-link>
        <router-link to="/signup"  class="btn">注册</router-link>
      </div>
      <div v-else>
        <drop-down />
        <!-- <a class="btn" href="#">你好 xxx</a> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import { defineComponent, PropType, ref } from 'vue';
 import DropDown from './DropDown.vue';

//  interface UserProps {
//     isLogin: boolean
//     name?: string
//     id?: number
//   }

  const isLogin = ref(false)

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
