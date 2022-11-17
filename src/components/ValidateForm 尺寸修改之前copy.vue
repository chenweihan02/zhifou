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


<script lang="ts">
  import mitt from 'mitt'
  export const emitter = mitt()
</script>

<script lang="ts" setup>
  import { onUnmounted } from 'vue';
  
  // import emitter from '@/mittBus'
  // import mitt from 'mitt'
  // const emitter = mitt()
  
  /**
   * 
   * form是个中间的过程, 需要input 先将结果传给form, form 进行校验，如果为空，则反应回去。
   * input的校验是通过blur 失去焦点校验,
   * form则是通过点击，去校验，然后将结果(boolean)返回给login，login判断是否成功
   * 则向服务器发送请求。
   * 
   * true | false 从子组件 ValidateInput传上来的，如果验证是true 则发送请求。
   */
  type ValidateFunc = () => boolean
  let funcArr: ValidateFunc[] = []

  const emit = defineEmits(['form-submit'])
  const submitForm = () => {
    const result = funcArr.map(func => func()).every(result => result)
    // console.log(funcArr)
    emit('form-submit', result)
    // console.log('Form.vue submitForm', result)
  }

  const callback = (func?: ValidateFunc) => {
    // console.log(func)
    if (func) {
      funcArr.push(func)
    }
  }

  emitter.on('form-item-created', callback)

  // emitter.on('form-item-created', (e) => {
  //   if (e) {
  //     funcArr.push(e)
  //     console.log(e)
  //     console.log(funcArr)
  //   }
  //   // console.log(typeof e)
  // })
  
  onUnmounted(() => {
    emitter.off('form-item-created', callback)
    funcArr = []
  })


</script>
