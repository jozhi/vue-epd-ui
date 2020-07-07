<template>
  <div class="AppManage">
    <div class="titlePart cf">
      <strong class="h1">应用管理</strong>
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
.AppManage{}
.titlePart {
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
