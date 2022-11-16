<template>
  <div class="login-page">
    <h5 class="text-lg text-center">登录到知否</h5>
    <validate-form @form-submit="onFormSubmit">      
      <div>
        <label class="inline-block" for="">邮箱地址</label>
        <validate-input 
          :rules="emailRules" v-model="emailVal" 
          placeholder="请输入邮箱地址" 
          type="text"
        />
      </div>

      <div class="mt-4">
        <label class="inline-block" for="">密码</label>
        <validate-input 
          :rules="passwordRules" v-model="passwordVal" 
          placeholder="请输入密码" 
          type="text" 
        />
      </div>

      <template #guide>
        <a href="#" class="inline-block mt-5 text-blue-500 underline">还没有账户？去注册一个新的吧！</a>
      </template>

      <template #submit>
        <button class="rounded text-white pl-3.5 pr-3.5 pt-1.5 pb-1.5 bg-blue-600 hover:bg-blue-700">
          登录
        </button>
      </template>
    </validate-form>
  </div>
</template>



<script lang="ts" setup>
  import ValidateForm from '@/components/ValidateForm.vue'
  import ValidateInput, { RulesProps } from '@/components/ValidateInput.vue'

  import { ref } from 'vue'

  import { useStore } from 'vuex';
  import { GlobalDataProps } from '@/store/types';
  import router from '@/router';

  import useCreateMessage from '@/hooks/useCreateMessage'


  const emailRules: RulesProps = [
    { type: "required", message: "电子邮箱地址不能为空" },
    { type: "email", message: "请输入正确的电子邮箱格式" },
  ];

  const passwordRules: RulesProps = [
    { type: "required", message: "密码不能为空" },
  ];

  const emailVal = ref('')
  const passwordVal = ref('')

  const store = useStore<GlobalDataProps>()

  const onFormSubmit = (result: boolean) => {
    if (result) {
      const payload = {
        email: emailVal.value,
        password: passwordVal.value
      }

      store
        .dispatch('loginAndFetch', payload)
        .then((res) => {
          console.log('login.vue res', res)
          
          if (res.code) {
            useCreateMessage('登录成功, 2s后跳转', 'success')
            console.log(store.state.user.nickname)
            setTimeout(() => {
              router.push('/')
            }, 2000);
          } else {
            useCreateMessage('登录失败', 'error')
            console.log('登录失败', res)
          }
        })

      // store
      //   .dispatch('loginAndFetch', payload)
      //   .then((res) => {
      //     console.log('login.vue res', res)
      //     useCreateMessage('登录成功, 2s后跳转', 'success')
      //     console.log(store.state.user.nickName)
      //     setTimeout(() => {
      //       // router.push({ name: 'home' })
      //     }, 2000);
          
      //   })
      //   .catch((e) => {
      //     useCreateMessage('登录失败', 'error')
      //     console.log('登录失败', e)
      //   })
      // console.log('校验成功', emailVal.value, '-', passwordVal.value)
    } else {
      console.log('校验失败')
    }
  }

</script>