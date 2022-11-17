<template>
  
  <div class="max-w-screen-xl mx-auto">
    <div class="mt-8">
      <h4 class="text-xl">新建文章</h4>
      <upload-file />

      <validate-form 
        class="w-full"
        @form-submit="onFormSubmit">      
        <div>
          <label class="inline-block" for="">文章标题</label>
          <validate-input 
            :rules="titleRules" v-model="titleVal" 
            placeholder="请输入文章标题" 
          />
        </div>

        <div class="mt-4">
          <label class="inline-block" for="">文章内容</label>
          <validate-input 
            class="mt-10"
            :rules="contentRules" v-model="contentVal" 
            placeholder="请输入文章内容" 
            :tag="'textarea'"
          />
        </div>

        <template #submit>
          <button class="rounded text-white pl-3.5 pr-3.5 pt-1.5 pb-1.5 bg-blue-600 hover:bg-blue-700">
            发表文章
          </button>
        </template>
      </validate-form>

    </div>
  </div>
 

</template>

<script lang="ts" setup>
  import UploadFile from '@/components/UploadFile.vue'
  import ValidateForm from '@/components/ValidateForm.vue'
  import ValidateInput, { RulesProps } from '@/components/ValidateInput.vue'

  import { ref } from 'vue'

  import { useStore } from 'vuex';
  import { GlobalDataProps } from '@/store/types';
  import router from '@/router';

  import useCreateMessage from '@/hooks/useCreateMessage'


  const titleRules: RulesProps = [
    { type: "required", message: "文章标题不能为空" }
  ];

  const contentRules: RulesProps = [
    { type: "required", message: "文章内容不能为空" },
  ];

  const titleVal = ref('')
  const contentVal = ref('')

  const store = useStore<GlobalDataProps>()

  const onFormSubmit = (result: boolean) => {
    if (result) {
      console.log('Create Post 校验成功')
      const payload = {
        title: titleVal.value,
        content: contentVal.value
        //column_id, author_id
      }

      // store
      //   .dispatch('loginAndFetch', payload)
      //   .then((res) => {
      //     console.log('login.vue res', res)
          
      //     if (res.code) {
      //       useCreateMessage('登录成功, 2s后跳转', 'success')
      //       console.log(store.state.user.nickname)
      //       setTimeout(() => {
      //         router.push('/')
      //       }, 2000);
      //     } else {
      //       useCreateMessage('登录失败', 'error')
      //       console.log('登录失败', res)
      //     }
      //   })
    } else {
      console.log('Create Post 校验失败')
    }
  }

</script>