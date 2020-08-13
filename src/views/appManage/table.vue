<template>
  <div class="tablePage">
    <div class="titlePart cf">
      <strong class="h1">table组件</strong>
    </div>
    <div class="contPart" id="contPart">
      <!-- input 基础用法示例 -->
      <div class="secition">
        <h3 class="demoTitle">基础用法</h3>
        <div class="demoCont">
          <div class="elm">
            <epd-table :data="tableData" maxheight="200" style="overflow-y:auto;">
              <epd-table-column editor="text" name="id" header="id" width="50"></epd-table-column>
              <epd-table-column editor="text" name="create_time" header="创建日期"></epd-table-column>
              <epd-table-column editor="text" name="name" header="姓名"></epd-table-column>
            </epd-table>
          </div>
          <div class="codeWrap">
            <pre v-highlightjs><code class="html">  // html部分
              &lt;el-form&gt;
                &lt;epd-table :data=&quot;tableData&quot;&gt;
                  &lt;epd-table-column editor=&quot;text&quot; name=&quot;date&quot; header=&quot;日期&quot; width=&quot;180&quot;&gt;&lt;/epd-table-column&gt;
                  &lt;epd-table-column editor=&quot;text&quot; name=&quot;name&quot; header=&quot;姓名&quot; width=&quot;180&quot;&gt;&lt;/epd-table-column&gt;
                  &lt;epd-table-column editor=&quot;text&quot; name=&quot;address&quot; header=&quot;地址&quot; &gt;&lt;/epd-table-column&gt;
                &lt;/epd-table&gt;
              &lt;/el-form&gt;

              // 数据部分
              tableData: {
                Data:[
                  {
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄',
                  },
        
                  {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄',
                  },
        
                ]
              }
            </code></pre>
          </div>
          <div class="toggle">
            <a href="javascript:;" class="toggleHand">显示隐藏代码</a>
          </div>
          <a href="javascript:;" class="toggleCode">显示隐藏代码</a>
        </div>
      </div>

      <!-- Table 列属性遍历生成 -->
      <div class="secition">
        <h3 class="demoTitle">列属性遍历生成table</h3>
        <div class="demoCont">
          <div class="elm">
            <epd-table :data="tableData" maxheight="200" style="overflow-y:auto;">
              <epd-table-column v-for="(item ,index) in columns" :key="index" :name="item.name" :header="item.name"></epd-table-column>
            </epd-table>
          </div>
          <div class="codeWrap">
            <pre v-highlightjs><code class="html">  // html部分
              &lt;epd-table :data=&quot;tableData&quot; maxheight=&quot;200&quot; style=&quot;overflow-y:auto;&quot;&gt;
                &lt;epd-table-column v-for=&quot;(item ,index) in columns&quot; :key=&quot;index&quot; :name=&quot;item.name&quot; :header=&quot;item.name&quot;&gt;&lt;/epd-table-column&gt;
              &lt;/epd-table&gt;

              // 数据部分
              data() {
                return {
                  // 表格数据
                  tableData: {
                    Data:[
                      {"is_system":"0","create_time":"2019-10-21 16:14:54.0","link_type_code":"mysql","operator_id":"2","modify_time":"2019-10-28 16:46:59.0","description":null,"is_delete":"1","operator_name":"admin","name":"test","creator_id":"2","creator_name":"admin","id":"1","folder_id":"71","m_id":"2"}
                      // more data
                    ]
                  },
                  // 表格列字段定义
                  columns:[
                    {"title":"id","key":"id","dataIndex":"id","name":"id"},
                    {"title":"name","key":"name","dataIndex":"name","name":"name"},
                    {"title":"description","key":"description","dataIndex":"description","name":"description"},
                    {"title":"folder_id","key":"folder_id","dataIndex":"folder_id","name":"folder_id"},
                    // more column
                  ]
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

      <!-- Table 列属性遍历生成 -->
      <div class="secition">
        <h3 class="demoTitle">列属性遍历生成table</h3>
        <div class="demoCont">
          <div class="elm">
            <epd-table :data="tableData" maxheight="200" style="overflow-y:auto;">
              <epd-table-column v-for="(item ,index) in columns" :key="index" :name="item.name" :header="item.name"></epd-table-column>
            </epd-table>
          </div>
          <div class="codeWrap">
            <pre v-highlightjs><code class="html">  // html部分
              &lt;epd-table :data=&quot;tableData&quot; maxheight=&quot;200&quot; style=&quot;overflow-y:auto;&quot;&gt;
                &lt;epd-table-column v-for=&quot;(item ,index) in columns&quot; :key=&quot;index&quot; :name=&quot;item.name&quot; :header=&quot;item.name&quot;&gt;&lt;/epd-table-column&gt;
              &lt;/epd-table&gt;

              // 数据部分
              data() {
                return {
                  // 表格数据
                  tableData: {
                    Data:[
                      {"is_system":"0","create_time":"2019-10-21 16:14:54.0","link_type_code":"mysql","operator_id":"2","modify_time":"2019-10-28 16:46:59.0","description":null,"is_delete":"1","operator_name":"admin","name":"test","creator_id":"2","creator_name":"admin","id":"1","folder_id":"71","m_id":"2"}
                      // more data
                    ]
                  },
                  // 表格列字段定义
                  columns:[
                    {"title":"id","key":"id","dataIndex":"id","name":"id"},
                    {"title":"name","key":"name","dataIndex":"name","name":"name"},
                    {"title":"description","key":"description","dataIndex":"description","name":"description"},
                    {"title":"folder_id","key":"folder_id","dataIndex":"folder_id","name":"folder_id"},
                    // more column
                  ]
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

      <!-- 组件参数介绍 -->
      <div class="secition tableIntro">
        <h3 class="moreInfo">Input Attributes</h3>
        <div class="cont">
          <table class="intro">
            <thead>
              <tr>
                <th>参数</th>
                <th>说明</th>
                <th>类型</th>
                <th>可选值</th>
                <th>默认值</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>value</td>
                <td>组件默认值</td>
                <td>String, Number</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>label</td>
                <td>组件左侧文字</td>
                <td>String</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>labelWidth</td>
                <td>组件左侧宽度</td>
                <td>String, Number</td>
                <td>-</td>
                <td>140</td>
              </tr>
              <tr>
                <td>name</td>
                <td>原生name属性</td>
                <td>String</td>
                <td>-</td>
                <td>-</td>
              </tr>
              <tr>
                <td>colspan</td>
                <td>el-col 宽度设置</td>
                <td>String, Number</td>
                <td>1~24</td>
                <td>24</td>
              </tr>
              <tr>
                <td>maxlength</td>
                <td>最大长度</td>
                <td>String, Number</td>
                <td>-</td>
                <td>200</td>
              </tr>
              <tr>
                <td>isClick</td>
                <td>是否显示 input 右侧小图标</td>
                <td>Boolean</td>
                <td>true/false</td>
                <td>false</td>
              </tr>
              <tr>
                <td>ishide</td>
                <td>设置显示隐藏</td>
                <td>Boolean</td>
                <td>true/false</td>
                <td>false</td>
              </tr>
              <tr>
                <td>eleDisabled</td>
                <td>是否禁止编辑</td>
                <td>Boolean</td>
                <td>true/false</td>
                <td>false</td>
              </tr>
              <tr>
                <td>indexNum</td>
                <td>用于定位此组件</td>
                <td>Number</td>
                <td>-</td>
                <td>0</td>
              </tr>
              <tr>
                <td>disableEnter</td>
                <td>data-disableEnter 标记</td>
                <td>String</td>
                <td>true/false</td>
                <td>false</td>
              </tr>
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
              <tr>
                <th>事件名称</th>
                <th>说明</th>
                <th>回调参数</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>onRealTimeChange</td>
                <td>根据组件值更改实时触发</td>
                <td>{ name | inputvalue | indexNumber }</td>
              </tr>
              <tr>
                <td>onChange</td>
                <td>仅在输入框失去焦点或用户按下回车时触发</td>
                <td>{ name | inputvalue | indexNumber }</td>
              </tr>
              <tr>
                <td>onBlur</td>
                <td>失去焦点时触发</td>
                <td>{ name | inputvalue | indexNumber }</td>
              </tr>
              <tr>
                <td>onFocus</td>
                <td>获得焦点时触发</td>
                <td>{ name | inputvalue | indexNumber }</td>
              </tr>
              <tr>
                <td>onEnter</td>
                <td>原生事件 -- 敲击回车时触发</td>
                <td>{ name | inputvalue | indexNumber }</td>
              </tr>
              <tr>
                <td>onClick-icon</td>
                <td>input右侧小按钮点击触发</td>
                <td>{ name | inputvalue | indexNumber }</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="supplementaryInstruction">* 此模块基于 elementUI 二次封装</div>
  </div>
</template>

<style lang="less" scope>
</style>


<script>
import domInteraction from '../../utils/domInteraction.js';

// @ is an alias to /src
export default {
  name: 'AppManage',
  data() {
    return {
      input:'',
      tableData: {
        Data:[
          {"is_system":"0","create_time":"2019-10-21 16:14:54.0","link_type_code":"mysql","operator_id":"2","modify_time":"2019-10-28 16:46:59.0","description":null,"is_delete":"1","operator_name":"admin","name":"test","creator_id":"2","creator_name":"admin","id":"1","folder_id":"71","m_id":"2"},
          {"is_system":"1","create_time":"2019-10-24 10:38:41.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-10-24 10:38:41.0","description":null,"is_delete":"0","operator_name":null,"name":"系统连接","creator_id":"1","creator_name":"admin","id":"42","folder_id":"0","m_id":null},
          {"is_system":"0","create_time":"2019-11-15 11:09:50.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-15 11:09:50.0","description":null,"is_delete":"0","operator_name":null,"name":"111111111","creator_id":"2","creator_name":"admin","id":"67","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-11-15 11:24:13.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-15 11:24:13.0","description":null,"is_delete":"0","operator_name":null,"name":"123123","creator_id":"2","creator_name":"admin","id":"70","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-11-15 16:30:34.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-15 16:30:34.0","description":null,"is_delete":"0","operator_name":null,"name":"datacenter","creator_id":"2","creator_name":"admin","id":"71","folder_id":"129","m_id":null},
          {"is_system":"0","create_time":"2019-12-11 18:47:27.0","link_type_code":"Mysql","operator_id":"2","modify_time":"2019-12-19 10:07:09.0","description":null,"is_delete":"1","operator_name":"admin","name":"最多跑一次数据库","creator_id":"2","creator_name":"admin","id":"72","folder_id":"151","m_id":null},
          {"is_system":"0","create_time":"2019-12-17 15:50:59.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-12-18 09:21:36.0","description":null,"is_delete":"1","operator_name":null,"name":"大数据分析_大屏数据","creator_id":"2","creator_name":"admin","id":"73","folder_id":"151","m_id":null}
        ]
      },
      columns:[
        {"title":"id","key":"id","dataIndex":"id","name":"id"},
        {"title":"name","key":"name","dataIndex":"name","name":"name"},
        {"title":"description","key":"description","dataIndex":"description","name":"description"},
        {"title":"folder_id","key":"folder_id","dataIndex":"folder_id","name":"folder_id"},
        {"title":"link_type_code","key":"link_type_code","dataIndex":"link_type_code","name":"link_type_code"},
        {"title":"is_delete","key":"is_delete","dataIndex":"is_delete","name":"is_delete"},
        {"title":"creator_id","key":"creator_id","dataIndex":"creator_id","name":"creator_id"},
        {"title":"creator_name","key":"creator_name","dataIndex":"creator_name","name":"creator_name"},
        {"title":"m_id","key":"m_id","dataIndex":"m_id","name":"m_id"},
        {"title":"operator_id","key":"operator_id","dataIndex":"operator_id","name":"operator_id"},
        {"title":"operator_name","key":"operator_name","dataIndex":"operator_name","name":"operator_name"},
        {"title":"create_time","key":"create_time","dataIndex":"create_time","name":"create_time"},
        {"title":"modify_time","key":"modify_time","dataIndex":"modify_time","name":"modify_time"},
        {"title":"is_system","key":"is_system","dataIndex":"is_system","name":"is_system"}
      ]
    };
  },
  mounted() {
    domInteraction.toggleCode();
  },
  methods: {
    onRealTimeChange(o) {
      console.log('onRealTimeChange', o);
    },
    onChange(o) {
      console.log('onChange', o);
    },
    onBlur(o) {
      console.log('onBlur', o);
    },
    onFocus(o) {
      console.log('onFocus', o);
    },
    onEnter(o) {
      console.log('onEnter', o);
    },
    onClickIcon(o) {
      console.log('onClickIcon', o);
    },
  },
        
};
</script>
