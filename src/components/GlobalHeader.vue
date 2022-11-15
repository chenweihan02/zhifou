<template>
  <div class="bg-blue-600 h-14">
    <div class="flex max-w-screen-xl mx-auto justify-between h-full items-center">
      
      <router-link to="/"><h1 class="text-xl text-white">知否知否</h1></router-link>
      <!--  -->
      <div v-if="!user.isLogin">
        <router-link to="/login" class="btn">登录</router-link>
        <router-link to="/signup"  class="btn">注册</router-link>
      </div>
      <div v-else>
        <dropdown :title="`你好 ${user.nickname}`">
          <div class="py-1">
            <dropdown-item>
              <router-link to="/create">新建文章</router-link>
            </dropdown-item>
            <dropdown-item>
              <router-link to="`/column/${user.column}`">我的专栏</router-link>
            </dropdown-item>
          </div>
          <div class="py-1">
            <dropdown-item>
              <router-link to="/edit">编辑资料</router-link>
            </dropdown-item>
            <dropdown-item>
              <a href="#" @click.prevent="handleLogout">退出登录</a>
            </dropdown-item>
          </div>
        </dropdown>
        <!-- <a class="btn" href="#">你好 xxx</a> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
 import { defineComponent, PropType, ref } from 'vue';
 import Dropdown from './Dropdown.vue';
  import { GlobalDataProps, UserProps } from '@/store/types'
  import DropdownItem from './DropdownItem.vue';
  import router from '@/router';
  import { useStore } from 'vuex';

//  interface UserProps {
//     isLogin: boolean
//     name?: string
//     id?: number
//   }

  // const isLogin = ref(false)

  const props = defineProps ({
      user: {
        type: Object as PropType<UserProps>,
        required: true
     }
  })


  const store = useStore<GlobalDataProps>()

  const handleLogout = () => {
    console.log('handleLogout')
    store.commit('logout')
    router.push({ name: 'home' })
  }
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
