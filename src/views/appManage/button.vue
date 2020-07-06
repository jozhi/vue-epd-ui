<template>
  <div class="AppManage">
    <div class="titlePart cf">
      <span class="searchBox">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </span>
    <div class="pb48 underline">
      <h2>Button组件</h2>
      <p>1.基础样式：type</p>
      <ep-button>default</ep-button>
      <ep-button type="success">success</ep-button>
      <ep-button type="error">error</ep-button>
      <ep-button type="warning">warning</ep-button>
      <ep-button type="info" style="min-width:120px">info</ep-button>
      <p>2.按钮大小：size</p>
      <ep-button>default</ep-button>
      <ep-button size="small">small</ep-button>
      <ep-button size="medium">medium</ep-button>
      <ep-button size="large">large</ep-button>
      <p>3.按钮形状：shape</p>
      <ep-button>default</ep-button>
      <ep-button shape="circle" type="info">circle</ep-button>
      <ep-button shape="rectangle" type="info">rectangle</ep-button>
      <p>4.禁用按钮：isDisabled</p>
      <ep-button isDisabled>default</ep-button>
      <ep-button type="success" isDisabled>success</ep-button>
      <ep-button type="error" isDisabled>error</ep-button>
      <ep-button type="warning" isDisabled>warning</ep-button>
      <ep-button type="info" isDisabled>info</ep-button>
    </div>
    </div>
    <div class="contPart">
      <a class="creatApp" href="#"><i class="el-icon-plus"></i> 创建应用</a>
    </div>
  </div>
</template>

<style lang="less" scope>
.AppManage{}
.titlePart {
  .searchBox{
    width: 300px;
    float: right;
  }
}
.contPart{
  margin-bottom: 10px;
  .creatApp{
    display: inline-block;
    margin: 20px 0 5px;
    color: #02A7F0;
    font-size: 18px;
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
