<template>
  <div class="max-w-screen-xl mx-auto border border-red-500">
    <div class="mx-auto w-1/2 px-2 mt-6 sm:px-0">
      <ul class="flex box-border border-b font-medium">
        <li class="box-border">
          <a href="#" class="item ">更新个人资料</a>
        </li>
        <li class="box-border">
          <a href="#" class="item active">更新专栏信息</a>
        </li>
      </ul>

      <div class="mt-6">
        <h4 class="inline-block text-2xl ">编辑个人资料</h4>
        <div class="flex flex-col">
          <img class="mb-2 mx-auto border rounded-full" src="@/assets/avatar.png" alt="" width="200">

          <validate-input
            :rules="titleRules"
            v-model="titleVal" 
            placeholder="请输入昵称" />

          <validate-input 
            class=" resize-none mt-10"
            :rules="descriptionRules"
            v-model="descriptionVal"
            placeholder="请输入个人简介"
            :tag="'textarea'" />

        </div>
        <button class="mt-2 bg-blue-500 text-white px-3 py-1.5 rounded">提交修改</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import UploadFile from '@/components/UploadFile.vue'
  import { ref } from 'vue'
  import ValidateInput, { RulesProps } from '@/components/ValidateInput.vue'

  const titleRules: RulesProps = [
    { type: "required", message: "昵称不能为空" }
  ]

  const descriptionRules: RulesProps = [
    { type: "required", message: "个人简介不能为空" },
  ]

  const titleVal = ref('')
  const descriptionVal = ref('')

</script>

<style scoped>
  .item {
    @apply block box-border rounded-tl rounded-tr py-2 px-6 border border-transparent  text-blue-500;
    margin-bottom: -1px;
  }

  .item:hover {
    @apply border-t-gray-200 border-l-gray-200 border-r-gray-200
  }

  .active {
    @apply bg-white text-black border-t-gray-200 border-l-gray-200 border-r-gray-200
  }

</style>

<!-- <template>
  <div class="max-w-screen-xl mx-auto border border-red-500">
    <!== <upload-file /> ==>
    <!== <TabGroup>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Content 1</TabPanel>
        <TabPanel>Content 2</TabPanel>
        <TabPanel>Content 3</TabPanel>
      </TabPanels>
    </TabGroup> ==>
    <div class="mx-auto w-1/2 px-2 mt-6 sm:px-0">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xlp-1 box-border">
          <!== <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
            <button :class="[
              'rounded-lg py-2.5 px-6 font-medium leading-5 box-border',
              'ring-white ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'shadow border-2 text-blue-500'
                : ' hover:border',
            ]">
              {{ category }}
            </button>
          </Tab> ==>
          <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
            <button :class="[
              'rounded py-2.5 px-6 font-medium leading-5 box-border outline-none',
              selected
                ? 'text-blue-500 border'
                : '',
              ]">
              {{ category }}
            </button>
          </Tab>
        </TabList>

        <TabPanels class="mt-7">
          <span class="inline-block text-2xl ">编辑个人资料</span>
          <TabPanel>
            <div class="flex flex-col">
              <img class="mb-2 mx-auto border rounded-full" src="@/assets/avatar.png" alt="" width="200">

                <validate-input
                  :rules="titleRules"
                  v-model="titleVal"
                  placeholder="请输入昵称"
                />
                
                <!== <textarea>123</textarea> ==>

                <validate-input
                  class=" resize-none mt-10"
                  :rules="descriptionRules"
                  v-model="descriptionVal"
                  placeholder="请输入个人简介"
                  :tag="'textarea'"
                />

            </div>
            <button class="mt-2 bg-blue-500 text-white px-3 py-1.5 rounded">提交修改</button>
          </TabPanel>
          <TabPanel>
            Content 2
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import UploadFile from '@/components/UploadFile.vue'
  import { ref } from 'vue'
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
  import ValidateInput, { RulesProps } from '@/components/ValidateInput.vue'

  const titleRules: RulesProps = [
    { type: "required", message: "昵称不能为空" }
  ]

  const descriptionRules: RulesProps = [
    { type: "required", message: "个人简介不能为空" },
  ]

  const titleVal = ref('')
  const descriptionVal = ref('')


  const categories = ref({
    '更新个人资料': [],
    '更新专栏信息': []
  })
</script> -->