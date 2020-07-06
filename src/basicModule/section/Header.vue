<template>
  <div class="headerFastPhoto">
    <el-header class="ep-header">
      <i class="ep-icon ep-icon-sidebar" v-show="!isSidebar" @click="shrink">
        <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor" aria-hidden="true">
          <path
            d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
          />
        </svg>
      </i>
      <i class="ep-icon ep-icon-sidebar" v-show="isSidebar" @click="shrink">
        <svg viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor" aria-hidden="true">
          <path
            d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 0 0 0 13.8z"
          />
        </svg>
      </i>
      <div class="ep-header-right">
        <el-dropdown @command="handleCommand">
          <span class="ep-header-right-account">
            <span>admin</span>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="rePw">修改密码</el-dropdown-item>
            <el-dropdown-item command="exit" divided>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>
  </div>
</template>

<script type="es6">
export default {
  data() {
    return {};
  },
  computed: {
    isSidebar() {
      return this.$store.getters.isSidebar;
    }
  },
  watch: {
    isSidebar: {
      handler(value) {
        return value;
      },
      deep: true
    }
  },
  methods: {
    /**
     * 收缩左侧菜单
     */
    shrink() {
      this.$store.dispatch('SET_SIDEBAR', !this.isSidebar);
    },
    handleCommand(command) {
      // console.log(command);
      if (command === 'rePw') {
        this.$api.get('/login', { cmd: 'logout' }).then(res => {
          if (res.success) {
            // this.$router.push('/');
            // this.$message.success(res.resultDes);
          } else {
            // this.$message.error(res.resultDes);
          }
        });
      }else if(command === 'exit'){
        console.log('exit');
      }
    }
  }
};
</script>

<style lang="less">
.headerFastPhoto {
  .ep-header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ep-icon-sidebar {
      font-size: 20px;
      cursor: pointer;
      transition: all 0.3s, padding 0s;
      float: left;
    }
    &-right {
      display: flex;
      align-items: center;
      float: right;
      span {
        cursor: pointer;
        height: 60px;
        display: flex;
        align-items: center;
        margin: 0 12px;
        transition: all 0.3s;
      }
      .ep-icon-help {
        margin-top: 5px;
      }
      &-account {
        display: inline-block;
        transition: all 0.3s;
        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  }
}
</style>
