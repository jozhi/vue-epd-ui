<template>
  <div class="loginPage">
    <div class="form-content">
      <h1>模板系统</h1>
      <el-form label-width="0" ref="ruleForm" :model="ruleForm" :rules="rules" class="ruleForm">
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" auto-complete="off" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="ruleForm.password" type="password" auto-complete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-row class="more-somthing">
            <el-checkbox class="fll" v-model="checked">自动登录</el-checkbox>
            <a href="javascript:;" class="forgotPW flr" @click="forgotPW()" >忘记密码</a>
        </el-row>
        <el-form-item>
          <el-button class="submit-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style lang="less" scope>
.loginPage{
  width: 100%;
  height: 100%;
  position: relative;
  background:#f1f2f6 url(../../assets/login-bg.jpg) 100% 100%;
}
.form-content{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  margin: auto;
  width: 400px;
  height: 360px;
  h1{
    padding-bottom: 50px;
  }
  .submit-btn{
    width: 100%;
  }
  .more-somthing{
    padding-bottom: 20px;
    .forgotPW{
      color: #1890FF;
    }
  }
}
</style>


<script>
// @ is an alias to /src
export default {
  name: 'Login',
  data(){
    return {
      ruleForm:{
        name:'',
        password:'',
      },
      checked:false,
      rules: {
        name: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
      }
    }
  },
  methods:{
    submitForm(){
      console.log('to submit');

      this.$router.push({
        path: '/Home'
      })
    },
    forgotPW(){

    }
  }
};
</script>
