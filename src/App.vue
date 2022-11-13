<template>
    <global-header />

    <router-view></router-view>

    <global-footer />


    <!-- <validate-form @formSubmit="onFromSubmit">
      <template #title>
        <h5 class="title-text">登录到知否</h5>
      </template>
      <template #guide>
        <a href="#" class="guide-text">还没有账户？去注册一个新的吧！</a>
      </template>

      <template #submit>
        <button class="btn">
          登录
        </button>
      </template>
    </validate-form> -->

    <!-- <validate-form>
      <template #title>
        <h5 class="title-text">注册知否账户</h5>
      </template>
      <template #guide>
        <a href="#" class="guide-text">已经有账户？快去登录吧！</a>
      </template>

      <template #submit>
        <button class="btn">
          注册新用户
        </button>
      </template>
    </validate-form> -->

    
    <!-- <column-list /> -->
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import HelloWorld from './components/HelloWorld.vue'
  import ColumnList from './components/ColumnList.vue'
  import GlobalHeader from './components/GlobalHeader.vue'
  import DropDown from './components/DropDown.vue'
  import ValidateForm from './components/ValidateForm.vue'
  import GlobalFooter from './components/GlobalFooter.vue'

  // const onFromSubmit = (isValid: boolean) => {
  //   if (isValid) {
  //     console.log('YES')
  //   } else {
  //     console.log('NO')
  //   }
  // }

</script>


<style scoped>
  /* .title-text {
    @apply text-lg text-center
  }
  .guide-text {
    @apply inline-block mt-5 text-blue-500 underline
  }
  .btn {
    @apply rounded text-white pl-3.5 pr-3.5 pt-1.5 pb-1.5 bg-blue-600 hover:bg-blue-700
  } */
</style>
