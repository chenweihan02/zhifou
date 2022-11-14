import { createApp } from "vue";
import Message from '@/components/Message.vue'

export type MessageType = 'default' | 'success' | 'error'

const createMessage = (message: string, type: MessageType, timeout = 2000) => {
  const messageItemInstance1 = createApp(Message, {
    message,
    type,
  })


  Message.template = '`111`'

  const messageItemInstance2 = createApp(Message, {
    message,
    type
  })

  const messageNode = document.createElement('div')
  messageNode.className = 'fixed top-4 flex flex-col h-0 z-50 w-full'

  const messageItemNode1 = document.createElement('div')
  const messageItemNode2 = document.createElement('div')


  messageItemInstance1.component('my-component', {
    Message
  })


  messageNode.appendChild(messageItemNode1)
  messageNode.appendChild(messageItemNode2)
  document.body.appendChild(messageNode)
  messageItemInstance1.mount(messageItemNode1)
  messageItemInstance2.mount(messageItemNode2)
}

export default createMessage