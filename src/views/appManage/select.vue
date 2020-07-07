<template>
  <div class="AppManage">
    <div class="titlePart cf">
      <strong class="h1">应用管理</strong>
    </div>
    <ep-select></ep-select>
  </div>
</template>

<style lang="less" scope>
.AppManage{}
.titlePart {
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
