<template>
  <div class="guide">
    <div class="titlePart cf">
      <strong class="h1">开发指南</strong>
    </div>
    <div class="contPart">

      <div class="secition">
        <p>推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。</p>
        <pre v-highlightjs><code class="code">npm i epd-ui -S</code></pre>
      </div>

      <div class="secition">
        <h3>完整引入</h3>
        <pre v-highlightjs><code class="javascript">// epdUI 引入
import Vue from 'vue';
import epdUI from '@/components'
Vue.use(epdUI)</code></pre>
      </div>

      <div class="secition">
        <h3>按需引入</h3>
        <pre v-highlightjs><code class="javascript">// epdUI 引入
import Vue from 'vue';
import { Button } from '@/components'
Vue.use(Button)</code></pre>
      </div>

    </div>
  </div>
</template>

<style lang="less" scope>
.guide{
  .secition{
    padding: 0 10px;
    margin-bottom: 50px;
  }
}
</style>


<script>
// @ is an alias to /src
export default {
  name: 'AppManage',
  data() {
    return {
      input:''
    };
  },
  methods: { }
};
</script>
