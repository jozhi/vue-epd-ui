<template>
  <div class="AppManage">
    <div class="titlePart cf">
      <span class="searchBox">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
      </span>
      <strong class="h1">应用管理</strong>
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
