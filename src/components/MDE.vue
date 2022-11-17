<template>
    <div>
      123
      <vue-easymde v-model="test" ref="editorInstance"/>
      <h1>Vue3 component wrapper for EasyMDE</h1>
      <button @click="clear">Clear Value</button>
      <button @click="test = '## new value'">Set Value</button>
      <Editor v-model="test" ref="editor" @blur="onBlur"/>
      <p>current value: {{test}}</p>
    </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { EditorInstance } from 'vue3-easymde'

  const test = ref('initial value')

  const editorInstance = ref<EditorInstance | null>(null)
  const editor = ref<EditorInstance | null>(null)

  if (editorInstance.value) {
    console.log(editorInstance.value.getMDEInstance())
  }

  const clear = () => {
  if (editor.value) {
    console.log(editor.value.getMDEInstance())
    editor.value.clear()
  }
  }
  const onBlur = () => {
    console.log('editor blur event triggered')
  }
</script>