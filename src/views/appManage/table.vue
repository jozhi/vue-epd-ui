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

      <!-- Table 一次性加载所有数据 -->
      <div class="secition">
        <h3 class="demoTitle">一次性加载所有数据</h3>
        <div class="demoCont">
          <div class="elm">
            <epd-table :data="tableData"
            :summaryTitles="['number']"
            :titleControl="true"
            :exportParm="{'name':''}"
            :selfRef="'toggleColumn'"
            @select-checkbox="selectCheckbox"
            :pager="10"
            :onlyData="true"
            style="overflow-y:auto;"
            >
              <el-table-column type="selection" width="55"> </el-table-column>
              <epd-table-column editor="text" name="id" header="id" width="50"></epd-table-column>
              <epd-table-column editor="text" name="name" header="姓名"></epd-table-column>
              <epd-table-column editor="text" name="number" header="月数"></epd-table-column>
            </epd-table>
          </div>
          <div class="codeWrap">
            <pre v-highlightjs><code class="html">  // html部分
            &lt;epd-table :data=&quot;tableData&quot;
              :summaryTitles=&quot;[&#x27;number&#x27;]&quot;
              :titleControl=&quot;true&quot;
              :exportParm=&quot;{&#x27;name&#x27;:&#x27;&#x27;}&quot;
              :selfRef=&quot;&#x27;toggleColumn&#x27;&quot;
              maxheight=&quot;200&quot;
              style=&quot;overflow-y:auto;&quot;
            &gt;
              &lt;epd-table-column editor=&quot;text&quot; name=&quot;id&quot; header=&quot;id&quot; width=&quot;50&quot;&gt;&lt;/epd-table-column&gt;
              &lt;epd-table-column editor=&quot;text&quot; name=&quot;name&quot; header=&quot;姓名&quot;&gt;&lt;/epd-table-column&gt;
              &lt;epd-table-column editor=&quot;text&quot; name=&quot;number&quot; header=&quot;月数&quot;&gt;&lt;/epd-table-column&gt;
            &lt;/epd-table&gt;

            // 数据部分
            data() {
              return {
                tableData: {
                  Data:[
                    {"id":"1","number":6,"name":"test"}
                  ]
                }
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



      <!-- Table 事件 分页 -->
      <div class="secition">
        <h3 class="demoTitle">Table 事件 分页</h3>
        <div class="demoCont">
          <div class="elm">
            <epd-table :data="tableData"
            :summaryTitles="['number']"
            :titleControl="true"
            :exportParm="{'name':''}"
            :selfRef="'toggleColumn'"
            @select-checkbox="selectCheckbox"
            :pager="10"
            :onlyData="true"
            style="overflow-y:auto;"
            >
              <el-table-column type="selection" width="55"> </el-table-column>
              <epd-table-column editor="text" name="id" header="id" width="50"></epd-table-column>
              <epd-table-column editor="text" name="name" header="姓名"></epd-table-column>
              <epd-table-column editor="text" name="number" header="月数"></epd-table-column>
            </epd-table>
          </div>
          <div class="codeWrap">
            <pre v-highlightjs><code class="html">  // html部分
            &lt;epd-table :data=&quot;tableData&quot;
              :summaryTitles=&quot;[&#x27;number&#x27;]&quot;
              :titleControl=&quot;true&quot;
              :exportParm=&quot;{&#x27;name&#x27;:&#x27;&#x27;}&quot;
              :selfRef=&quot;&#x27;toggleColumn&#x27;&quot;
              maxheight=&quot;200&quot;
              style=&quot;overflow-y:auto;&quot;
            &gt;
              &lt;epd-table-column editor=&quot;text&quot; name=&quot;id&quot; header=&quot;id&quot; width=&quot;50&quot;&gt;&lt;/epd-table-column&gt;
              &lt;epd-table-column editor=&quot;text&quot; name=&quot;name&quot; header=&quot;姓名&quot;&gt;&lt;/epd-table-column&gt;
              &lt;epd-table-column editor=&quot;text&quot; name=&quot;number&quot; header=&quot;月数&quot;&gt;&lt;/epd-table-column&gt;
            &lt;/epd-table&gt;

            // 数据部分
            data() {
              return {
                tableData: {
                  Data:[
                    {"id":"1","number":6,"name":"test"}
                  ]
                }
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
        <h3 class="moreInfo">Table Attributes</h3>
        <div class="cont">
          <table class="intro">
            <thead>
              <tr> <th>参数</th> <th>说明</th> <th>数据类型</th> <th>可选值</th> <th>默认值</th> </tr>
            </thead>
            <tbody>
              <tr> <td>data</td> <td>Table 数据入口</td> <td> Object（参见示例）</td> <td>-</td> <td>-</td> </tr>
              <tr> <td>titleControl</td> <td>开启列显示隐藏功能</td> <td> Boolean</td> <td>true/false</td> <td>false</td> </tr>
              <tr> <td>summaryTitles</td> <td>需要合计的属性数组</td> <td> Array</td> <td>数据对象中需要累加的值</td> <td>-</td> </tr>
              <tr> <td>selfRef</td> <td>单独定义 table 的 ref 和 Id</td> <td> String</td> <td>合法的字符串</td> <td>ref:'multipleTable' && id:'titleControl'</td> </tr>
              <tr> <td>exportParm</td> <td>导出功能相关查询参数</td> <td> Object</td> <td>视业务而定</td> <td>-</td> </tr>
              <tr> <td>onlyData</td> <td>是否为一次性加载所有数据</td> <td> Boolean</td> <td>true/false</td> <td> false</td> </tr>
              
              <tr> <td>isGroupTable</td> <td>是否分组显示</td> <td> Boolean</td> <td>true/false</td> <td> false</td> </tr>
              <tr> <td>group</td> <td>分组依据</td> <td> String</td> <td>-</td> <td>'group'</td></tr>
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
                <td>select-checkbox</td>
                <td>根据组件值更改实时触发</td>
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
        total: 21,
        Data:[
          {"is_system":"0","create_time":"2019-10-21 16:14:54.0","link_type_code":"mysql","operator_id":"2","modify_time":"2019-10-28 16:46:59.0","description":null,"is_delete":"1","operator_name":"admin","name":"test","creator_id":"2","creator_name":"admin","id":"1","folder_id":"71","m_id":"2"},
          {"is_system":"1","create_time":"2019-10-24 10:38:41.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-10-24 10:38:41.0","description":null,"is_delete":"0","operator_name":null,"name":"系统连接","creator_id":"1","creator_name":"admin","id":"42","folder_id":"0","m_id":null},
          {"is_system":"0","create_time":"2019-10-25 16:57:54.0","link_type_code":"Mysql","operator_id":"2","modify_time":"2019-11-14 14:54:16.0","description":null,"is_delete":"1","operator_name":"admin","name":"datacenter","creator_id":"2","creator_name":"admin","id":"43","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-10-25 17:14:44.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-14 14:54:19.0","description":null,"is_delete":"1","operator_name":null,"name":"666","creator_id":"2","creator_name":"admin","id":"44","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-10-28 16:30:15.0","link_type_code":"Mysql","operator_id":"2","modify_time":"2019-11-14 15:22:54.0","description":null,"is_delete":"1","operator_name":"admin","name":"datacenter","creator_id":"2","creator_name":"admin","id":"45","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-10-28 16:37:25.0","link_type_code":"Mysql","operator_id":"2","modify_time":"2019-11-14 16:51:55.0","description":null,"is_delete":"1","operator_name":"admin","name":"datacenter","creator_id":"2","creator_name":"admin","id":"46","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-10-28 20:07:21.0","link_type_code":"Mysql","operator_id":"2","modify_time":"2019-11-13 18:52:46.0","description":null,"is_delete":"0","operator_name":"admin","name":"clouddata","creator_id":"2","creator_name":"admin","id":"47","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-11-05 14:59:54.0","link_type_code":"api","operator_id":null,"modify_time":"2019-11-14 14:54:23.0","description":null,"is_delete":"1","operator_name":null,"name":"testapi","creator_id":"2","creator_name":"admin","id":"48","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-11-05 15:09:40.0","link_type_code":"api","operator_id":null,"modify_time":"2019-11-14 14:54:25.0","description":null,"is_delete":"1","operator_name":null,"name":"testapi","creator_id":"2","creator_name":"admin","id":"49","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-11-07 15:31:33.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-07 15:31:33.0","description":null,"is_delete":"0","operator_name":null,"name":"openapi","creator_id":"2","creator_name":"admin","id":"50","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-11-07 15:32:15.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-07 15:32:15.0","description":null,"is_delete":"0","operator_name":null,"name":"yibao","creator_id":"2","creator_name":"admin","id":"51","folder_id":"92","m_id":null},
          {"is_system":"0","create_time":"2019-11-07 15:41:34.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-07 15:41:34.0","description":null,"is_delete":"0","operator_name":null,"name":"matters","creator_id":"2","creator_name":"admin","id":"52","folder_id":"92","m_id":null},
          {"is_system":"0","create_time":"2019-11-13 15:16:55.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-14 16:51:57.0","description":null,"is_delete":"1","operator_name":null,"name":"zabbix","creator_id":"2","creator_name":"admin","id":"53","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-11-13 15:17:56.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-13 15:17:56.0","description":null,"is_delete":"0","operator_name":null,"name":"zabbix","creator_id":"2","creator_name":"admin","id":"54","folder_id":"92","m_id":null},
          {"is_system":"0","create_time":"2019-11-14 15:05:53.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-15 16:35:28.0","description":null,"is_delete":"1","operator_name":null,"name":"datacener","creator_id":"2","creator_name":"admin","id":"57","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-11-15 11:09:50.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-15 11:09:50.0","description":null,"is_delete":"0","operator_name":null,"name":"111111111","creator_id":"2","creator_name":"admin","id":"67","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-11-15 11:24:13.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-15 11:24:13.0","description":null,"is_delete":"0","operator_name":null,"name":"123123","creator_id":"2","creator_name":"admin","id":"70","folder_id":"71","m_id":null},
          {"is_system":"0","create_time":"2019-11-15 16:30:34.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-11-15 16:30:34.0","description":null,"is_delete":"0","operator_name":null,"name":"datacenter","creator_id":"2","creator_name":"admin","id":"71","folder_id":"129","m_id":null},
          {"is_system":"0","create_time":"2019-12-11 18:47:27.0","link_type_code":"Mysql","operator_id":"2","modify_time":"2019-12-19 10:07:09.0","description":null,"is_delete":"1","operator_name":"admin","name":"最多跑一次数据库","creator_id":"2","creator_name":"admin","id":"72","folder_id":"151","m_id":null},
          {"is_system":"0","create_time":"2019-12-17 15:50:59.0","link_type_code":"Mysql","operator_id":null,"modify_time":"2019-12-18 09:21:36.0","description":null,"is_delete":"1","operator_name":null,"name":"大数据分析_大屏数据","creator_id":"2","creator_name":"admin","id":"73","folder_id":"151","m_id":null},
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
    selectCheckbox(o) {
      console.log('selectCheckbox', o);
    },
  },
        
};
</script>
