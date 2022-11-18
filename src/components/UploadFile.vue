<template>
  <div>
      <div class="mt-1 h-56 flex justify-center border-2 border-dashed bg-gray-100 border-gray-300">
        <div class="border  w-80 overflow-hidden">
          <div class="relative" style="padding-bottom: 80%">
            <div class="absolute top-0 left-0 w-full h-full">
              <div v-if="loading" class="opacity-60 bg-black absolute w-full h-full flex justify-center items-center">
                <div class="load"></div>
              </div>

              <label for="file-upload"
                class="cursor-pointer rounded-md bg-white font-medium text-indigo-600 block w-full h-56">
                <img v-if="callbackUrl.length" :src="callbackUrl"  />
                <img v-else src="@/assets/avatar.png" />

                <input 
                  @change="changeHandler"
                  id="file-upload" 
                  name="file-upload" 
                  type="file" 
                  class="sr-only" />
                </label>

            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { GlobalDataProps } from '@/store/types';
  import { computed } from '@vue/reactivity';
  import axios from 'axios';
  import { ref } from 'vue'
  import { useStore } from 'vuex';
  import  createMessage from '@/hooks/useCreateMessage'

  const store = useStore<GlobalDataProps>()

  const loading = ref(false)
  // 默认图片
  const callbackUrl = ref('')

  const changeHandler = (e:Event) => {
    const currentTarget = e.target as HTMLInputElement
    // 获取第一个文件
    if (currentTarget.files) {

      loading.value = true

      const file = currentTarget.files[0]

      console.log('upload file', file.name)

      const param = new FormData()
      param.append('img', file)

      // 发送请求，上传到后台，
      // 同时进行展示。
      setTimeout(() => {
        axios.post('/api/img/upload', param, {
          headers: { 'Content-Type': 'multipart/form-data' }
        }).then((res) => {
          // console.log(res)
          createMessage('上传成功', 'success')
          const pathname = res.data.newName
          callbackUrl.value = 'http://localhost:8081/img/' + pathname
          // console.log('get img pathname', pathname)
          // // 上传成功回显服务器的图片
          // axios.get('http://localhost:8081/img/' + pathname).then((res)=>{
          //   console.log('get img url', res)
          // })
          loading.value = false
        }).catch((e) => {
          console.log(e)
          loading.value = false
          createMessage('上传失败', 'error')
        })
      }, 2000);
    }
  }  

</script>

<!-- <style lang="less">
  .load {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(5, 236, 249, .8);;
    &::before {
      content: "";
      width: 70px; // 50 * √2
      height: 70px; // 50 * √2
      background-color: hwb(233 5% 22%);
      position: absolute;
      left: 50%;
      bottom: 50%;
      z-index: 1;
      transform-origin: left bottom;
      animation: rotate 1.5s infinite linear;
    }
    &::after {
      content: "";
      width: 40px;
      height: 40px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      margin: auto;
      background-color: #fff;
      z-index: 2;
      border-radius: 50%;
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style> -->

  <!-- <div>
      <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
        <div class="space-y-1 text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
            aria-hidden="true">
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <div class="flex text-sm text-gray-600">
            <label for="file-upload"
              class="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
              <span>Upload a file</span>
              <input id="file-upload" name="file-upload" type="file" class="sr-only" />
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
    </div>
  </div> -->