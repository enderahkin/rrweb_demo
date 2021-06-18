<template>
  <div class="home">
    <button @click="play()">播放录屏</button>
    <div
      id="show"
      style="width: 1024px;height: 656px;    margin: 0 auto;border: 1px solid #ccc;margin-top: 10px;"
    >
    </div>
    <!-- 回放所需要的HTML元素 -->
  </div>
</template>
<script>
export default {
  name: 'Play',
  components: {

  },
  methods: {
    play() {
      let el = document.getElementById("show")
      el.innerHTML = ""
      let events = this.eventsMatrix[this.eventsMatrix.length - 1]
      //取最后一个快照回放
      let replayer = new rrwebPlayer({
        target: el, // 可以自定义 DOM 元素
        data: {
          events,
        },
        unpackFn: rrweb.unpack,//解压数据
      });
      return replayer
    },

  }
}
</script>
