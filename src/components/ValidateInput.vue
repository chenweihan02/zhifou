<template>
  <div>
    <input
      v-if="tag !== 'textarea'"
      class="con invalid focus: border-blue-500 focus:border-opacity-75 focus:ring-4 focus: ring-blue-600 focus:ring-offset-0 focus:ring-opacity-40"
      @blur="validateInput"
      v-model="inputRef.val"
      v-bind="$attrs"
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

<!-- <script lang="ts">
import { defineComponent } from 'vue';
  defineComponent({
    inheritAttrs: false
  })
</script> -->

<script lang="ts" setup>
import {  onMounted, PropType, reactive, computed } from 'vue';
// import  emitter   from './ValidateForm.vue'
// import emitter from './ValidateForm.vue';
  import emitter from '@/mittBus';

  // // 邮箱正则
  const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  interface RuleProps {
    type: 'required' | 'email' | 'custom'
    message: string
    validator?: () => boolean
  }

  type RulesProps = RuleProps[]
  type TagType = 'input' | 'textarea'

  const props = defineProps({
    rules: Array as PropType<RulesProps>,
    modelValue: String,
    tag: {
      type: String as PropType<TagType>,
      default: 'input'
    }
  })

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


  // const updateValue = (e: KeyboardEvent) => {
  //   const targetValue = (e.target as HTMLInputElement).value
  //   inputRef.val = targetValue
  //   emit('update:modelValue', targetValue)
  // }

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
          // case 'custom':
          //   passed = rule.validator ? rule.validator() : true
          //   break
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
  @apply rounded-md border border-gray-300 pl-3 pr-10 pt-2 pb-2 mt-2 mb-2 w-full outline-none;
    /* border-blue-500
    border-opacity-75
    ring-4
    ring-blue-600
    ring-offset-0
    ring-opacity-30 */
}
</style>
