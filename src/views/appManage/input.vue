<template>
  <div class="inputPage">
    <div class="titlePart cf">
      <strong class="h1">input组件</strong>
    </div>
    <div class="contPart" id="contPart">
      
      <!-- input 基础用法示例 -->
      <div class="secition">
        <h3 class="demoTitle">基础用法</h3>
        <div class="demoCont">
          <div class="elm">
            <el-form>
              <!-- <epd-input label="input"></epd-input> -->
              <epd-input label="title" v-model="input" placeholder="请输入内容"></epd-input>
            </el-form>
          </div>
          <div class="codeWrap">
            <pre v-highlightjs><code class="html">  // html部分
            &lt;el-form&gt;
              &lt;epd-input label=&quot;title&quot; v-model=&quot;input&quot; placeholder=&quot;请输入内容&quot;&gt;&lt;/epd-input&gt;
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
      
      <!-- input 事件用法示例 -->
      <div class="secition">
        <h3 class="demoTitle">事件用法示例</h3>
        <div class="demoCont">
          <div class="elm">
            <el-form>
              <!-- <epd-input label="input"></epd-input> -->
              <epd-input
                label="happy title"
                v-model="input"
                name='eventInput'
                placeholder="请输入内容"
                :isClick=true

                @onRealTimeChange="onRealTimeChange"
                @onChange="onChange"
                @onBlur="onBlur"
                @onFocus="onFocus"
                @onEnter="onEnter"
                @onClickIcon="onClickIcon"
              ></epd-input>
            </el-form>
          </div>
          <div class="codeWrap">
            <pre v-highlightjs><code class="html">  // html部分
            &lt;el-form&gt;
              &lt;!-- &lt;epd-input label=&quot;input&quot;&gt;&lt;/epd-input&gt; --&gt;
              &lt;epd-input
                label=&quot;happy title&quot;
                v-model=&quot;input&quot;
                name=&#x27;eventInput&#x27;
                placeholder=&quot;请输入内容&quot;
                :isClick=true

                @onRealTimeChange=&quot;onRealTimeChange&quot;
                @onChange=&quot;onChange&quot;
                @onBlur=&quot;onBlur&quot;
                @onFocus=&quot;onFocus&quot;
                @onEnter=&quot;onEnter&quot;
                @onClickIcon=&quot;onClickIcon&quot;
              &gt;&lt;/epd-input&gt;
            &lt;/el-form&gt;

            // js部分
            data() {
              return {
                input:''
              };
            },
            methods: {
              onRealTimeChange(o){ console.log('onRealTimeChange', o); },
              onChange(o){ console.log('onChange', o); },
              onBlur(o){ console.log('onBlur', o); },
              onFocus(o){ console.log('onFocus', o); },
              onEnter(o){ console.log('onEnter', o); },
              onClickIcon(o){ console.log('onClickIcon', o); },
            }
            </code></pre>
          </div>
          <div class="toggle">
            <a href="javascript:;" class="toggleHand">显示隐藏代码</a>
          </div>
          <a href="javascript:;" class="toggleCode">显示隐藏代码</a>
        </div>
      </div>

      <!-- 组件参数介绍 -->
      <div class="secition tableIntro">
        <h3 class="moreInfo">Input Attributes</h3>
        <div class="cont">
          <table class="intro">
            <thead>
              <tr> <th>参数</th> <th>说明</th> <th>类型</th> <th>可选值</th> <th>默认值</th> </tr>
            </thead>
            <tbody>
              <tr> <td>value</td> <td>组件默认值</td> <td>String, Number</td> <td>-</td> <td>-</td> </tr>
              <tr> <td>label</td> <td>组件左侧文字</td> <td>String</td> <td>-</td> <td>-</td> </tr>
              <tr> <td>labelWidth</td> <td>组件左侧宽度</td> <td>String, Number</td> <td>-</td> <td>140</td> </tr>
              <tr> <td>name</td> <td>原生name属性</td> <td>String</td> <td>-</td> <td>-</td> </tr>
              <tr> <td>colspan</td> <td>el-col 宽度设置</td> <td>String, Number</td> <td>1~24</td> <td>24</td> </tr>
              <tr> <td>maxlength</td> <td>最大长度</td> <td>String, Number</td> <td>-</td> <td>200</td> </tr>
              <tr> <td>isClick</td> <td>是否显示 input 右侧小图标</td> <td>Boolean</td> <td>true/false</td> <td>false</td> </tr>
              <tr> <td>ishide</td> <td>设置显示隐藏</td> <td>Boolean</td> <td>true/false</td> <td>false</td> </tr>
              <tr> <td>eleDisabled</td> <td>是否禁止编辑</td> <td>Boolean</td> <td>true/false</td> <td>false</td> </tr>
              <tr> <td>indexNum</td> <td>用于定位此组件</td> <td>Number</td> <td>-</td> <td>0</td> </tr>
              <tr> <td>disableEnter</td> <td>data-disableEnter 标记</td> <td>String</td> <td>true/false</td> <td>false</td> </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 组件事件介绍 -->
      <div class="secition tableIntro">
        <h3 class="moreInfo">Input Events</h3>
        <div class="cont">
          <table class="intro">
            <thead>
              <tr> <th>事件名称	</th> <th>说明</th> <th>回调参数</th> </tr>
            </thead>
            <tbody>
              <tr> <td>onRealTimeChange</td>
                <td>根据组件值更改实时触发</td> <td>{ name | inputvalue | indexNumber }</td> </tr>
              <tr> <td>onChange</td>
                <td>仅在输入框失去焦点或用户按下回车时触发</td> <td>{ name | inputvalue | indexNumber }</td> </tr>
              <tr> <td>onBlur</td>
                <td>失去焦点时触发</td> <td>{ name | inputvalue | indexNumber }</td> </tr>
              <tr> <td>onFocus</td>
                <td>获得焦点时触发</td> <td>{ name | inputvalue | indexNumber }</td> </tr>
              <tr> <td>onEnter</td>
                <td>原生事件 -- 敲击回车时触发</td> <td>{ name | inputvalue | indexNumber }</td> </tr>
              <tr> <td>onClick-icon</td>
                <td>input右侧小按钮点击触发</td> <td>{ name | inputvalue | indexNumber }</td> </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
    
    <div class="supplementaryInstruction">* 此模块基于 elementUI 二次封装</div>
  </div>
</template>

<style lang="less" scope> </style>


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
    
    // 以下为点击事件
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


    // 初始化 codeWrap ，进入页面先隐藏代码
    const codeWraps = toggle.querySelectorAll('.codeWrap')
    codeWraps.forEach(function(item){
      let offsetHeight = item.offsetHeight+'px'
      item.dataset.height = offsetHeight
      item.style.height = offsetHeight
      setTimeout(function(){
        item.style.height = '0px'
      },0)
    })

  },
  methods: {
    onRealTimeChange(o){ console.log('onRealTimeChange', o); },
    onChange(o){ console.log('onChange', o); },
    onBlur(o){ console.log('onBlur', o); },
    onFocus(o){ console.log('onFocus', o); },
    onEnter(o){ console.log('onEnter', o); },
    onClickIcon(o){ console.log('onClickIcon', o); },
  }
};
</script>
