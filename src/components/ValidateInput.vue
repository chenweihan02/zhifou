<template>
  <div>
    <input
      v-if="tag !== 'textarea'"
      class="con invalid focus: border-blue-500 focus:border-opacity-75 focus:ring-4 focus: ring-blue-600 focus:ring-offset-0 focus:ring-opacity-40"
      @blur="validateInput"
      v-model="inputRef.val"
      v-bind="$attrs"
      type="text"
    />

    <textarea
      v-else
      class="con invalid focus: border-blue-500 focus:border-opacity-75 focus:ring-4 focus: ring-blue-600 focus:ring-offset-0 focus:ring-opacity-40"
      @blur="validateInput"
      v-model="inputRef.val"
      v-bind="$attrs"
    />

    <span v-if="inputRef.error" class="block text-red-500 text-sm">{{ inputRef.message }}</span>
  </div>
</template>


<script lang="ts">
  export default {
    inheritAttrs: false
  }

  export interface RuleProps {
    type: 'required' | 'email' | 'custom'
    message: string
    validator?: () => boolean // 自定义校验规则
  }

  export type RulesProps = RuleProps[]
</script>

<script lang="ts" setup>
// import emitter from '@/mittBus';
import { emitter } from './ValidateForm.vue'

import {  onMounted, PropType, reactive, computed } from 'vue';

  // 邮箱正则
  const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  // 输入框的两种类型
  type TagType = 'input' | 'textarea'

  // 父组件传过来的值
  const props = defineProps({
    rules: Array as PropType<RulesProps>,
    modelValue: String, // Login的 model 
    tag: {
      type: String as PropType<TagType>,
      default: 'input'
    }
  })

  // const inputRef = reactive({
  //   val: '',
  //   error: false,
  //   message: ''
  // })

  const emit = defineEmits(['update:modelValue'])
  
  const inputRef = reactive({
    val: computed({
      get: () => props.modelValue || '',
      set: val => {
        emit('update:modelValue', val)
      }
    }),
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
          case 'custom':
            passed = rule.validator ? rule.validator() : true
            break
          default:
            break
        }
        return passed
      })
      inputRef.error = !allPassed
      return allPassed
    }
    return true
  }
  onMounted(() => {
    emitter.emit('form-item-created', validateInput)
  })
</script>

<style scoped>
  .con {
    @apply rounded-md border border-gray-300 pl-3 pr-10 pt-2 pb-2 mt-2 mb-2 w-full outline-none;
  }
</style>
