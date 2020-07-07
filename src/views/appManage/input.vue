<template>
  <div class="inputPage">
    <div class="titlePart cf">
      <strong class="h1">input组件</strong>
    </div>
    <div class="contPart" id="contPart">
      <div class="secition">
        <h3 class="demoTitle">基础用法</h3>
        <div class="demo">
          <div class="elm">
            <el-form>
              <!-- <ep-input label="input"></ep-input> -->
              <ep-input label="title" v-model="input" placeholder="请输入内容"></ep-input>
            </el-form>
          </div>
          <div class="code">
            <pre v-highlightjs><code class="javascript">// html部分
&lt;el-form&gt;
  &lt;ep-input label=&quot;title&quot; v-model=&quot;input&quot; placeholder=&quot;请输入内容&quot;&gt;&lt;/ep-input&gt;
&lt;/el-form&gt;

// js部分
data() {
  return {
    input:''
  };
}
</code></pre>
          </div>
          <div class="toggle">
            <a href="javascript:;" class="toggleHand">显示隐藏代码</a>
          </div>
          <a href="javascript:;" class="toggleCode">显示隐藏代码</a>
        </div>
        
      </div>
    </div>
    <!-- ep-input 必须要包裹在 el-form 内 -->
    <el-form>
      <ep-input label="input"></ep-input>
    </el-form>
  </div>
</template>

<style lang="less" scope>
.demoTitle{
  margin: 0 30px;
}
.demo{
  position: relative;
  margin: 0 30px 80px;
  border: 1px solid #d2d2d2;
  
  .toggleCode{
    position: absolute;
    right: 0;
    top: -40px;
    padding: 3px 5px;
    border-radius: 3px;
    color: #1890ff;
  }
  .elm{
    padding: 10px;
    overflow: hidden;
    border-bottom: 1px solid #d2d2d2;
  }
  .code{
    font-size: 14px;
    overflow: hidden;
    transition: height .3s;
    // border-bottom: 1px solid #d2d2d2;
    pre{
      margin: 0;
    }
  }
  .toggle{
    text-align: center;
    a{
      display: block;
      color: #1890ff;
      line-height: 40px;
    }
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
  mounted(){
    const toggle = document.querySelector('#contPart')
    function toggleCodeHeight(target){
        let codeHeight = ''
        // 如果第一次点击，初始化赋值
        if(target.dataset.height){
          codeHeight = target.dataset.height
        }else{
          target.dataset.height = target.offsetHeight+'px'
          codeHeight = target.offsetHeight+'px'
        }
        if(target.style.height === ''){
          target.style.height = codeHeight
        }

        // 延时解决第一次没有动画的bug
        setTimeout(()=>{
          // 控制显示隐藏逻辑
          if( target.style.height == '0px' ){
            target.style.height = codeHeight
          }else{
            target.style.height = '0px'
          }
        },0)
    }

    // 底部显示隐藏按钮
    toggle && toggle.addEventListener("click", function(e){
      if(e.target.className === 'toggleCode'){
        toggleCodeHeight(e.target.previousElementSibling.previousElementSibling)
      }
    },false)
    // 右上角显示隐藏按钮
    toggle && toggle.addEventListener("click", function(e){
      if(e.target.className === 'toggleHand'){
        toggleCodeHeight(e.target.parentElement.previousElementSibling)
      }
    },false)

  },
  methods: { }
};
</script>
