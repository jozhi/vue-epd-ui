<template>
  <div class="buttonPage">
    <div class="titlePart cf">
      <strong class="h1">应用管理</strong>
    </div>
    <div class="pb48 underline">
      <h2>Button组件</h2>
      <p>1.基础样式：type</p>
      <epd-button>default</epd-button>
      <epd-button type="success">success</epd-button>
      <epd-button type="error">error</epd-button>
      <epd-button type="warning">warning</epd-button>
      <epd-button type="info" style="min-width:120px">info</epd-button>
      <p>2.按钮大小：size</p>
      <epd-button>default</epd-button>
      <epd-button size="small">small</epd-button>
      <epd-button size="medium">medium</epd-button>
      <epd-button size="large">large</epd-button>
      <p>3.按钮形状：shape</p>
      <epd-button>default</epd-button>
      <epd-button shape="circle" type="info">circle</epd-button>
      <epd-button shape="rectangle" type="info">rectangle</epd-button>
      <p>4.禁用按钮：isDisabled</p>
      <epd-button isDisabled>default</epd-button>
      <epd-button type="success" isDisabled>success</epd-button>
      <epd-button type="error" isDisabled>error</epd-button>
      <epd-button type="warning" isDisabled>warning</epd-button>
      <epd-button type="info" isDisabled>info</epd-button>
    </div>
  </div>
</template>

<style lang="less" scope>
.buttonPage{}
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
