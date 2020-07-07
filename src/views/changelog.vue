<template>
  <div class="changelog">
    <div class="titlePart cf">
      <strong class="h1">更新日志</strong>
    </div>
    <div class="contPart">
      <div class="secition">
        <h3>1.0.0</h3>
        <dl>
          <dt>补充说明模块</dt>
          <dd>添加更新日志、使用说明模块。</dd>
          <dt>初始化表单组件</dt>
          <dd>添加input、select、button组件并进行优化改造</dd>
          <dt>初始化系统</dt>
          <dd>初始化系统，并对系统进行改造。</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<style lang="less" scope>
.changelog{
  .secition{
    padding: 20px;
    margin-bottom: 50px;
    h3{
      // line-height: 1.4;
      border-bottom: 1px solid #d2d2d2;
      margin-bottom: 15px;
    }
    dl{
      padding-left: 20px;
    }
    dt{
      font-size: 16px;
    }
    dd{
      position: relative;
      padding-left: 20px;
      margin-bottom: 20px;
      color: #666;
    }
    dd::before{
      position: absolute;
      content: '·';
      display: block;
      left: 7px;
      color: #666;
      font-size: 28px;
      line-height: 24px;
      }
  }
}
</style>


<script>
// @ is an alias to /src
export default {
  name: 'changelog',
  data() {
    return {
      input:''
    };
  },
  methods: { }
};
</script>
