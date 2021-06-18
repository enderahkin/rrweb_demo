/*
 * @Author: ZHOUWEN
 * @Date: 2021-05-28 10:01:22
 * @LastEditTime: 2021-06-18 17:16:17
 * @LastEditors: ZHOUWEN
 * @Description: 
 * @fileheader.Author: ZHOUWEN
 * @fileheader.LastModifiedBy: ZHOUWEN
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

Vue.config.productionTip = false
let eventsMatrix = [
  []
];
//存储快照

let stopFn = rrweb.record({
  emit(event, isCheckout) {
    // isCheckout 是一个标识，告诉你重新制作了快照
    if (isCheckout) {
      console.log(`重新生成快照啦`)
      eventsMatrix.push([]);
      savedata()
      //将录制完成的快照发送到后端存储
    }
    const lastEvents = eventsMatrix[eventsMatrix.length - 1];
    lastEvents.push(event);
  },
  checkoutEveryNms: 2 * 60 * 1000, // 每2分钟重新制作快照
  packFn: rrweb.pack, //压缩数据
  sampling: {
    // 设置滚动事件的触发频率
    scroll: 150,
    // 每 150ms 最多触发一次
    input: 'last' // 连续输入时，只录制最终值
  }
});
//如果想停止录制可直接调用stopFn()

async function savedata() {
  //保存最后一个已录制完成的快照
  let events = []
  if (!eventsMatrix[eventsMatrix.length - 2]) return;
  const url = '你的后端api'
  const body = JSON.stringify({
    events
  });
  const params = {
    body
  }
  await axios({
    method: 'post',
    url: url,
    data: params
  });
}

Vue.prototype.eventsMatrix = eventsMatrix
//暴露全局变量
window.$this = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')