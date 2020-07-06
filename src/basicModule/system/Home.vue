<template>
  <el-container>
    <keep-alive v-if="!onlyPage">
      <Sidebar></Sidebar>
    </keep-alive>
    <el-container 
      :class="['is-vertical', onlyPage?'onlyPage':'']"
      :style="onlyPage? 'margin-left: 0;' : isSidebar ? 'margin-left: 256px;' : 'margin-left: 80px;'"
    >
      <Header v-if="!onlyPage"></Header>
      <Tabs v-if="!onlyPage"></Tabs>
      <div class="content">
        <div class="innerPage">
          <router-view />
        </div>
      </div>
    </el-container>
  </el-container>
</template>

<style lang="less" scoped>
.is-vertical {
  height: 100vh;
  overflow-y: auto;
  background-color: #f1f2f5;
}
.onlyPage{
  >.content{
    padding: 0 10px 10px;
    margin: 15px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.15);
    background-color: #fff;

    >.innerPage{
      padding: 15px 10px 10px;
    }
  }
}
.content{
  padding: 20px 15px 15px;
  text-align: left;
}
.innerPage{
  padding: 15px;
  border-radius: 3px;
  background-color: #fff;

  min-height: calc(100vh - 176px);
}
</style>

<script>
import Header from '../section/Header.vue';
import Tabs from '../section/Tabs.vue';
import Sidebar from '../section/Sidebar.vue';

export default {
  name: 'Home',
  components: {
    Header,
    Sidebar,
    Tabs
  },
  computed: {
    isSidebar() {
      return this.$store.getters.isSidebar;
    }
  },
  data:function() {
    return {
      onlyPage:this.$route.query.onlyPage
    };
  }
};
</script>
