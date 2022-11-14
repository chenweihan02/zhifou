<template>
  <!-- <div class="fixed inset-0 flex items-center justify-center">
    <button type="button" @click="openModal"
      class="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
      Open dialog
    </button>
  </div> -->
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-10 text-center align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-xl font-medium leading-6 text-gray-900">
                删除文章
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  确定要删除这篇文章吗？
                </p>
              </div>
              <!-- focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 -->
              <div class="mt-8">
                <button type="button"
                  class="inline-flex justify-center outline-none rounded-md border border-transparent bg-blue-600 px-10 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  @click="closeModal">
                  确定
                </button>
              </div>
              <div class="mt-4">
                <button type="button"
                  class="inline-flex justify-center  outline-none rounded-md border border-transparent bg-gray-500 px-10 py-2 text-sm font-medium text-white hover:bg-gray-600"
                  @click="closeModal">
                  取消
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle } from '@headlessui/vue'

  const isOpen = ref(true)

  function closeModal() {
    isOpen.value = false
  }
  function openModal() {
    isOpen.value = true
  }
</script>