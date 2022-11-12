<template>
  <div>
    <input
      class="con invalid focus: border-blue-500 focus:border-opacity-75 focus:ring-4 focus: ring-blue-600 focus:ring-offset-0 focus:ring-opacity-40"
      type="text"
      v-model="inputRef.val"
      @blur="validateInput"
      :placeholder="tip"
    />
    <span v-if="inputRef.error" class="block text-red-500 text-sm">{{ inputRef.message }}</span>
  </div>
</template>

<script lang="ts" setup>
import { processSlotOutlet, stringifyExpression } from '@vue/compiler-core';
import { propsToAttrMap } from '@vue/shared';
import { PropType, reactive } from 'vue';

  interface RuleProps {
    type: 'required' | 'email',
    message: string
  }

  type RulesProps = RuleProps[]

  const props = defineProps({
    rules: Array as PropType<RulesProps>,
    tip: String
  })

  const inputRef = reactive({
    val: '',
    error: false,
    message: ''
  })

  const validateInput = () => {
    if (props.rules) {
      const allPassed = props.rules.every(rule => {
        let passed = true
        inputRef.message = rule.message
        switch(rule.type) {
          case 'required':
            passed = (inputRef.val.trim() !== '')
            break
          case 'email':
            passed = emailReg.test(inputRef.val)
            break
          default:
            break
        }
      })
      // inputRef.error = !allPassed
      inputRef.error = !allPassed
    }
  }

  // // 邮箱正则
  const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  // const validateEmail = () => {
  //   if (emailRef.val.trim === '') {
  //     emailRef.error = true
  //     emailRef.message = 'can not be empty'
  //   } else if (!emailReg.test(emailRef.val)) {
  //     emailRef.error = true
  //     emailRef.message = 'valid email'
  //   }
  // }

  // const emailRules: RulesProps = [
  //   { type: 'required', message: '电子邮箱地址不能为空' },
  //   { type: 'email', message: '请输入正确的电子邮箱格式' }
  // ]


</script>

<style scoped>
.con {
  @apply rounded-md
    border 
    border-gray-300
    /* border-blue-500
    border-opacity-75
    ring-4
    ring-blue-600
    ring-offset-0
    ring-opacity-30 */
    pl-3
    pr-10
    pt-2
    pb-2
    mt-2
    mb-2
    w-full
    outline-none;
}
</style>
