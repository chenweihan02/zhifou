<template>
  <div class="border border-black max-w-screen-xl mx-auto">
    <form class="mx-auto w-72 border mt-5">
      <slot name="default"></slot>
      <slot name="guide"></slot>
      <div class="submit-area mt-5 inline-block" @click.prevent="submitForm">
        <slot name="submit"></slot>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
  import {  onMounted } from 'vue';
  import emitter from '@/mittBus'
  // import mitt, { Emitter }  from 'mitt'
  
  // const emitter:any = mitt()

  // import mitt from 'mitt'
  // const emitter = mitt()
  
  type ValidateFunc = () => boolean


  const emit = defineEmits(['form-submit'])
  /**
   * true | false 从子组件 ValidateInput传上来的，如果验证是true 则发送请求。
   */
  let funcArr: ValidateFunc[] = []
  const submitForm = () => {
    const result = funcArr.map(func => func()).every(result => result)
    console.log(funcArr)
    emit('form-submit', result)
    console.log('Form.vue submitForm', result)
  }

  const callback = (func?: ValidateFunc) => {
    if (func) {
      funcArr.push(func)
    }
  }
  
  emitter.on('form-item-created', e=>{
    console.log('e', e)
    callback()
  })

  onMounted(() => {
    emitter.off('form-item-created', e=>{
      console.log('e', e)
      callback()
    })
    funcArr = []
  })


</script>
