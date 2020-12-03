<template>
  <div class="buttonPage">
    <div class="titlePart cf">
      <strong class="h1">应用管理</strong>
    </div>
    <div class="pb48 underline">
      <epd-editor v-model="edText" @change="change"></epd-editor>
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
      edText:''
    };
  },
  methods: {
    change(o){
      console.log(o);
    }
  }
};
</script>
