import { createApp } from "vue";
import Message from '@/components/Message.vue'

export type MessageType = 'default' | 'success' | 'error'

const messageNode = document.createElement('div')
messageNode.className = 'fixed top-4 flex flex-col h-0 z-50 w-full'


let messageArr: any = []

const createMessage = (message: string, type: MessageType, timeout = 2000) => {
  const messageItemInstance = createApp(Message, {
    message,
    type,
  })

  // document.body.appendChild(messageNode)
  if (!document.body.contains(messageNode)) {
    document.body.appendChild(messageNode)
  }

  const messageItemNode = document.createElement('div')
  messageItemNode.className = 'flex'
  messageItemInstance.mount(messageItemNode)
  messageNode.appendChild(messageItemNode)
  messageArr.push(messageItemNode)

  setTimeout(() => {
    messageItemInstance.unmount()
    messageNode.removeChild(messageItemNode)
    messageArr.pop(messageItemNode)

    if (messageArr.length === 0) {
      document.body.removeChild(messageNode)
    }

  }, timeout);
}

export default createMessage