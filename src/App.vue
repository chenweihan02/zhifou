<template>
    <global-header />

    <div class="border border-black max-w-screen-xl mx-auto">
      <h5 class="text-lg text-center">登录到知否</h5>
      <form class="mx-auto w-72 border mt-5" action="">
      <div class="">
        <label class="inline-block" for="">邮箱地址</label>
        <validate-input :rules="emailRules" :tip="'请输入邮箱地址'"/>
      </div>

      <div class="mt-4">
        <label class="inline-block" for="">密码</label>
        <validate-input :rules="passwordRules" :tip="'请输入密码'"/>          
      </div>
      <a href="#" class="inline-block mt-5 text-blue-500 underline ">还没有账户？去注册一个新的吧！</a>
      <button class="mt-5 rounded text-white pl-3.5 pr-3.5 pt-1.5 pb-1.5 bg-blue-600 hover:bg-blue-700 ...">登录</button>

    </form>
    </div>


    <!-- <column-list /> -->
</template>

<script setup lang="ts">
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import HelloWorld from './components/HelloWorld.vue'
  import ColumnList from './components/ColumnList.vue'
  import GlobalHeader from './components/GlobalHeader.vue'
  import DropDown from './components/DropDown.vue'
  import ValidateInput from './components/ValidateInput.vue'


  interface RuleProps {
    type: 'required' | 'email',
    message: string
  }
  type RulesProps = RuleProps[] 
  const emailRules: RulesProps = [
    { type: 'required', message: '电子邮箱地址不能为空' },
    { type: 'email', message: '请输入正确的电子邮箱格式' }
  ]

  const passwordRules: RulesProps = [
    { type: 'required', message: '密码不能为空' }
  ]
</script>


<style lang="less" scoped>

</style>
