import { App } from "vue";
import dayjs from "dayjs";
// <p v-ftime="'YYYY'">{{11}} </p>
export default function directiveFtime(app: App) {
  app.directive("ftime", {
    mounted(el, bindings) {
      //1. 获取时间，并转化成毫秒
      let timestamp = el.textContent
      if (timestamp.length === 10) {
        timestamp = timestamp * 1000
      }

      //2. 获取传入的参数
      let format = bindings.value
      if (!format) {
        format = "YYYY-MM-DD"
      }

      //3. 对时间进行格式化
      el.textContent = dayjs(timestamp).format(format)
    }
  })
}