<template>
  <div class="ep-table">
    <div class="toolsBar cf" v-if="titleControl || (JSON.stringify(exportQueryParams) != '{}')">
      
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAAEAAAAAA0VXHyAAABhElEQVQ4EWNgIBJ0L94zdf/+/SzoypnQBXDx//1jyDr9+O/2aUsPCyKrIdoAkKb//xlcPv/9eaJ34WE1mCGMMAY63bfqmNCfn99iGf4xJDAwMEr8Z/gvAVfDyPie6T9TWGm84x6sBnQv3pv4/9//nv8MDEJwTegMRsY/DP8Z85mRxf///8/ErWw3D0jXA8U5keUw2IyM/4Au24FiALeS3SygU5MwFKMLQLwQUBbvtBIeiD1L9oQANaeA1AL99YyBgSmbk5lZ1kyOmbUszhlhESPDLZb/bBYg/0PVMjCsWvWf+f6PvbcY/jMoMTIyHmbh4AwoCrN6h2xx58I9/xkZGfbwMLOHZUXbvofJgRPGw1/7/MCaGRgec/3nCcwJM0fRDFLMxMQwzUSGOd/R0fYPTDOIBhsADPEAIPsfIwNLeE68+VtkBTB2aaxLNoyNTEOS5n9GM6DzNpXGORxHliSGDTGAkUGemZEhmRgNVFfD2Llw70FgKrcjx2RGBsa98HRAjgEgPQCWo3Og8uAYwwAAAABJRU5ErkJggg=="
        alt="导出" title="导出"
        class="flyBtn"
        @click="allExcel"
        v-if="exportIcon && toolsFlag"
      >
      
      <el-popover class="flyBtn" v-if="titleControl && toolsFlag" placement="bottom" trigger="hover" visible-arrow="true">
        <div v-for="(item, i) in tableTitle" :key="i">
          <el-checkbox v-model="item.checked">{{ item.title }}</el-checkbox>
        </div>
        <!-- <el-button slot="reference">显示列</el-button> -->
        <img alt="筛选" title="筛选" id="SXIcon" slot="reference" 
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAPCAYAAADtc08vAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEKADAAQAAAABAAAADwAAAADW5XGhAAAAmElEQVQoFWPsWrRnyf//DNEM5ABGxtlMZGsGWfj/fyoTAwNjIzmWQ/QwNjKCGJ0L9zYAjauHCBJLMjaWxzs3gA0AaSHNEIhmkD64AcQbgtCMYQBhQ1A1YzUAtyGYmnEaADFkz38QDQPl8S4o3oWJA6ORMjAyDGB8zcjIGIYrpLCGwf79+1kYGBkvAjWu5uRk1S6Lc16NywAA/iQ0ZXEQcRAAAAAASUVORK5CYII="
        >
      </el-popover>
      <!-- <el-popover
        v-if="JSON.stringify(exportQueryParams) != '{}'"
        placement="bottom"
        trigger="hover"
        visible-arrow="true"
        >
        <div>
          <el-button @click="curExcel">导出当前页</el-button>
        </div>
        <div>
          <el-button @click="allExcel">导出所有页</el-button>
        </div>
        <el-button slot="reference">导出</el-button>
      </el-popover>-->
    </div>

    <!-- 单个table（不分类显示） -->
    <div v-if="!isGroupTable">
      <el-table
        :ref="selfRef || 'multipleTable'"
        :show-summary="summaryTitles.length != 0"
        :summary-method="getSummaries"
        :span-method="objectSpanMethod"
        @row-click="rowclick"
        row-key="rowKey"
        class="singleTable"
        highlight-current-row
        :row-class-name="tableRowClassName"
        @select-all="selectAll"
        @select="select"
        @selection-change="handleSelectionChange"
        :data="tableData"
        :border="border"
        style="width: 100%"
        :max-height="maxheight"
        @sort-change="sortchange"
        @row-dblclick="rowDblclick"
        @cell-click="cellclick"
        @cell-dblclick="cellDbClick"
        :id="selfRef || 'epdTable'"
        stripe
      >
        <slot></slot>
      </el-table>
    </div>

    <!-- 用作多个table分类显示表头 -->
    <div v-if="isGroupTable && tableData.length !== 0" style="margin-bottom:10px" class="mainGroup">
      <div style="margin-bottom: 10px" :class="{flyTitle: flyTitle}" id="flyTitle">
        <el-table
          :span-method="objectSpanMethod"
          :ref="selfRef || 'multipleTable'"
          class="mainTable"
          @row-click="rowclick"
          highlight-current-row
          :row-class-name="tableRowClassName"
          @select-all="selectAll"
          @select="select"
          @selection-change="handleSelectionChange"
          :border="border"
          style="width: 100%"
          :max-height="maxheight"
          @sort-change="sortchange"
          @row-dblclick="rowDblclick"
          @cell-click="cellclick"
          @cell-dblclick="cellDbClick"
          :id="selfRef || 'epdTable'"
          stripe
        >
          <slot></slot>
        </el-table>
      </div>
      <!-- 用于定位以取消浮动 -->
      <el-table class="victims" :class="{disFly: flyTitle}" ref="nearmaintable"></el-table>
      <!-- 多个table分类显示 -->
      <div v-for="(value, key, i) in groupTable" :key="i" style="margin-bottom:10px">
        <div style="display: flex">
          <!-- <el-button class="togle" v-show="!noShowArr.includes(i)" type="primary"
          @click="hidThisTable(i)" size="mini">收起</el-button>-->
          <img
            src="./img/icon_guizeshouqi_nor.png"
            alt="收起"
            class="togle"
            v-show="!noShowArr.includes(i)"
            title="收起"
            @click="hidThisTable(i)"
            style="cursor:pointer;"
          />
          <!-- <el-button class="togle" v-show="noShowArr.includes(i)" type="primary"
          @click="showThisTable(i)">展开</el-button>-->
          <img
            src="./img/icon_guizezhankai_nor.png"
            alt="展开"
            class="togle"
            v-show="noShowArr.includes(i)"
            title="展开"
            @click="showThisTable(i)"
            style="cursor:pointer;"
          />
          <div style="margin-bottom:10px;font-size:16px;color:#409EFF;font-weight:bold">{{ `${key}` }}</div>
        </div>
        <el-table
          v-show="!noShowArr.includes(i)"
          :show-summary="summaryTitles.length != 0"
          :summary-method="getSummaries"
          :span-method="objectSpanMethod"
          :show-header="i === key"
          :ref="selfRef || 'multipleTable'"
          class="multipleTable"
          @row-click="rowclick"
          highlight-current-row
          :row-class-name="tableRowClassName"
          @select-all="selectAll"
          @select="select"
          @selection-change="handleSelectionChange"
          :data="value"
          :border="border"
          style="width: 100%"
          :max-height="maxheight"
          @sort-change="sortchange"
          @row-dblclick="rowDblclick"
          @cell-click="cellclick"
          @cell-dblclick="cellDbClick"
          :id="selfRef || 'epdTable'"
          stripe
        >
          <slot></slot>
        </el-table>
      </div>
    </div>
    <!-- 多个table但没有数据时以单个table表格显示暂无数据 -->
    <div v-if="isGroupTable && tableData.length === 0" style="text-align:center;color:#909399">
      <el-table
        :ref="selfRef || 'multipleTable'"
        :show-summary="summaryTitles.length != 0"
        :summary-method="getSummaries"
        :span-method="objectSpanMethod"
        @row-click="rowclick"
        highlight-current-row
        :row-class-name="tableRowClassName"
        @select-all="selectAll"
        @select="select"
        @selection-change="handleSelectionChange"
        :data="tableData"
        :border="border"
        style="width: 100%"
        :max-height="maxheight"
        @sort-change="sortchange"
        @row-dblclick="rowDblclick"
        @cell-click="cellclick"
        @cell-dblclick="cellDbClick"
        :id="selfRef || 'epdTable'"
        stripe
      >
        <slot></slot>
      </el-table>
    </div>

    <!-- 分页 -->
    <slot name="pagination"></slot>
    <el-pagination
      v-if="pagesize > 0 && toolsFlag"
      background
      small
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 20, 60, 100, 200, 500, 2000]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="Number(data.total)"
    ></el-pagination>
  </div>
</template>

<script type="es6">
export default {
  props: {
    // 负责声明哪些字段需要统计
    summaryTitles: {
      type: Array,
      default: () => [],
    },
    // 表格列显隐控制
    titleControl: {
      type: Boolean,
      default: false,
    },
    selfRef: {
      type: String,
      default: '',
    },
    maxheight: {
      type: [Number,String],
      default: 10000,
    },
    onlyData: {
      type: Boolean,
      default: false,
    },
    sortable: {
      type: Boolean,
      default: false,
    },
    checkRow: {
      type: Boolean,
      default: false,
    },
    data: {
      type: [Object, Array],
      default: () => {
        return {
          total: 0,
          Data: [],
        };
      },
    },
    border: {
      type: Boolean,
      default: false,
    },
    isClass: {
      type: Boolean,
      default: false,
    },
    rowKey: {
      type: String,
      default: '',
    },
    pager: {
      type: [String, Number],
      // default: 10
    },
    pageNum: {
      type: [String, Number],
      default: 1,
    },
    name: String,
    // api: {
    //   type: String,
    //   default: function () {
    //     return 'doQuery';
    //   },
    // },
    // pathName: {
    //   type: String,
    //   default: 'tableData',
    // },
    // isCodeType: {
    //   type: Boolean,
    //   default: false,
    // },
    ismerge: {
      type: Boolean,
      default: false,
    },
    // 导出excel功能 icon 是否显示
    exportIcon: {
      type: Boolean,
      default: false,
    },
    // 导出excel查询参数
    exportQueryParams: {
      type: Object,
      default: function () {
        return {};
      },
    },
    // 是否要分组显示
    isGroupTable: {
      type: Boolean,
      default: false,
    },
    // 分组依据
    group: {
      type: String,
      default: 'group',
    },
    isSpanMethods: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    // 监听传入主数据的改变以更新显示数据
    data: {
      handler(newValue) {
        // this.$emit('getData', newValue);
        if (newValue.Data) {
          this.tableData = this.onlyData ? newValue.Data.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize) : newValue.Data;

          if (this.titleControl) {
            this.getTitleListName();
          }
          if (this.isGroupTable) {
            this.$nextTick(() => this.addScrollEventLister());
          }
          if (this.tableData.length > 0) {
            this.toolsFlag = true;
          }
        }
        // console.log('watch data newValue:',newValue);
      },
      deep: true,
    },
    pageNum: {
      handler(val) {
        this.currentPage = Number(val);
      },
      deep: true,
    },
    pager: {
      handler(val) {
        this.pagesize = Number(val);
      },
      deep: true,
    },
    // tableData: {
    //   handler(val) {
    //     for (const d of this.thisSelfRef) {
    //       d.bodyWrapper.addEventListener('scroll', (res) => {
    //         this.howLong = res.target.scrollLeft
    //       }, false)
    //     }
    //   }
    //   // deep: true
    // },

    // 同步横向滚动条
    howLong: {
      handler() {
        for (const d of this.thisSelfRef) {
          d.bodyWrapper.scrollLeft = this.howLong;
        }
        this.$refs.mainTable.bodyWrapper.scrollLeft = this.howLong;
      },
    },
    // 同步标题宽度
    flyTitle: {
      handler(val) {
        if (val === true) {
          document.getElementById('flyTitle').style.maxWidth = this.howWidth + 'px';
        }
      },
    },
  },
  computed: {
    // 计算分类显示依据
    groupTable() {
      var groupCollect = {}; // 形式如，{组名1：[{},{}]，组名2：[{},{}]}
      // 处理tableData中的分组信息，将tableData分组
      for (var j = 0; j < this.tableData.length; j++) {
        var groupname = this.tableData[j][this.group];
        if (typeof groupCollect[groupname] === 'undefined') {
          groupCollect[groupname] = [];
        }
        groupCollect[groupname].push(this.tableData[j]);
      }
      return groupCollect; // 形式如，{{groupName:'',children:[{},{}]}
    },
  },
  data() {
    return {
      thisSelfRef:null,
      howLong: null,
      howWidth: null,
      tableTitle: [], // 存放列表表头对象，{title:"",checked:}控制列显示用
      mytable: false,
      index: 0,
      pagesize: Number(this.pager),
      currentPage: Number(this.pageNum),
      tableData: [],
      flyTitle: false,
      noShowArr: [], // 分类显示的收起隐藏中的隐藏内容
      toolsFlag: false, // 控制是否展示按钮工具
    };
  },
  created() {
    // this.tableData = this.data.Data
    // console.log('this.onlyData', this.onlyData);
    // console.log('this.data.Data', this.data.Data);

    if (this.onlyData) {
      this.tableData = this.data.Data.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize);
    } else {
      this.tableData = this.data.Data;
    }

  },
  mounted() {
    // console.log('this.selfRef:::',this.selfRef);
    // console.log('this.summaryTitles:::',this.summaryTitles);
    // 当前 table 的 ref 对象
    this.thisSelfRef = this.selfRef ? this.$refs[this.selfRef] : this.$refs.multipleTable

    // 监听表头高度
    if (this.isGroupTable) {
      window.addEventListener('scroll', this.handleScrollx, true);
    }
    // 表格初始化时获得列名
    this.toolsFlag = true;

    // console.log('############## this.titleControl:',this.titleControl);

    if (this.titleControl) {
      this.getTitleListName();
    }
    if (this.isGroupTable && this.tableData.length !== 0) {
      this.$nextTick(() => {
        // console.log(this.$refs);
        this.addScrollEventLister();
      });
    }

  },
  methods: {
    // 判定是否需要表头浮动
    handleScrollx() {
      if (this.$refs.mainTable) {
        // this.howWidth = this.$refs.nearmaintable.bodyWrapper.clientWidth
        if (this.$refs.mainTable.bodyWrapper.getBoundingClientRect().top <= 38) {
          this.flyTitle = true;
        }
        if (this.$refs.nearmaintable.bodyWrapper.getBoundingClientRect().top >= 49) {
          this.flyTitle = false;
        }
      }
    },
    // 获得控制列显隐列表（表头列表）
    getTitleListName() {
      const self = this;
      const selfId = self.selfRef || 'epdTable'
      self.tableTitle = [];
      setTimeout(function () {
        
        if (document.getElementById(selfId)) {
          var titles = document.getElementById(selfId).getElementsByTagName('thead')[0].getElementsByClassName('cell');
          for (var i = 0; i < titles.length; i++) {
            if(titles[i].firstChild && titles[i].firstChild.className ==='el-checkbox'){
              continue;
            }
            self.tableTitle.push({
              title: titles[i].innerText,
              checked: true,
            });
          }
        }
      }, 10);
    },
    // 添加滚动监听器
    addScrollEventLister() {
      if (this.$refs.mainTable) {
        this.$refs.mainTable.bodyWrapper.addEventListener(
          'scroll',
          (res) => {
            this.howLong = res.target.scrollLeft;
          },
          false
        );
      }
      if (this.thisSelfRef.length && this.thisSelfRef.length > 0) {
        for (const d of this.thisSelfRef) {
          d.bodyWrapper.addEventListener(
            'scroll',
            (res) => {
              this.howLong = res.target.scrollLeft;
            },
            false
          );
        }
      }
    },
    delScrollEventLister() {
      for (const d of this.thisSelfRef) {
        d.bodyWrapper.removeEventListener(
          'scroll',
          (res) => {
            this.howLong = res.target.scrollLeft;
          },
          false
        );
      }
    },
    // 隐藏当前分表
    hidThisTable(i) {
      this.noShowArr.push(i);
      // console.log(this.noShowArr);
    },
    // 展开当前分表
    showThisTable(i) {
      this.noShowArr.splice(this.noShowArr.indexOf(i), 1);
      // console.log(this.noShowArr);
    },

    // 求和计算
    getSummaries({ columns, data }) {
      const self = this;
      // 求和算法 ~ 解决js语言浮点数数位计算bug
      const sumMethod = (arr) => {
        return arr.reduce((pre, cur) => {
          let r1, r2, m;
          try {
            r1 = pre.toString().split('.')[1].length;
          } catch (e) {
            r1 = 0;
          }
          try {
            r2 = cur.toString().split('.')[1].length;
          } catch (e) {
            r2 = 0;
          }
          m = Math.pow(10, Math.max(r1, r2));
          return Math.round(pre * m + cur * m) / m;
        });
      };

      const totalNumObj = {};
      data.forEach((groupDataItem) => {
        // 遍历需要计算合计的type
        self.summaryTitles.forEach((totalType) => {
          // 累加type
          if (groupDataItem[totalType]) {
            if (!totalNumObj[totalType]) {
              totalNumObj[totalType] = [];
            }
            totalNumObj[totalType].push(Number(groupDataItem[totalType]));
          }
        });
      });
      // 对累加的结果进行求和计算
      for (let i in totalNumObj) {
        totalNumObj[i] = sumMethod(totalNumObj[i]);
      }

      // 保存表最后一行的统计结果
      const sums = [];
      // 遍历每一列
      columns.forEach((column, index) => {
        if (index === 0) {
          // 第一列为合计
          sums[index] = '合计';
        } else {
          if (totalNumObj[column.property] !== undefined) {
            sums[index] = totalNumObj[column.property].toFixed(2);
          }
        }
      });
      return sums;
    },

    objectSpanMethod({ rowIndex, columnIndex }) {
      // console.log('objectSpanMethod:',row, column, rowIndex, columnIndex);
      // console.log(row, column, rowIndex, columnIndex);
      if (this.isSpanMethods) {
        if (columnIndex === 0 && rowIndex === 1) {
          return [1, 5];
        }
      }
      if (this.ismerge) {
        if ((columnIndex === 2) & (rowIndex === 1)) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        }
        if ((columnIndex === 4) & (rowIndex === 1)) {
          return {
            rowspan: 2,
            colspan: 1,
          };
        }
      }
    },
    parentHandleclick(e) {
      // console.log(e)
      this.mytable = e;
      if (e) {
        this.data.Data.forEach((row) => {
          this.thisSelfRef.toggleRowSelection(row, true);
        });
      } else {
        this.thisSelfRef.clearSelection();
      }
    },
    tableRowClassName({ row, rowIndex }) {
      if (this.isClass) {
        if (row.afterInfo !== row.beforeInfo) {
          return 'warning-row';
        }
      }
      if (this.checkRow) {
        if (this.onlyData) {
          row.index = (this.currentPage - 1) * this.pagesize + rowIndex;
        } else {
          row.index = rowIndex;
        }
      }
    },
    rowclick(row) {
      let index = this.data.Data.indexOf(row);
      this.$emit('rowclick', row, index);
    },
    selectAll() {},
    select(selection, row) {
      this.$emit('select-checkbox', selection, row);
    },
    handleSelectionChange(val) {
      this.$emit('ischose', val, this.data.Data, this.mytable);
    },
    cellclick(row, column) {
      // console.log(row,column,cell,event);
      let index = this.data.Data.indexOf(row);
      this.$emit('cellclick', row, column.property, index);
    },
    handleSizeChange(val) {
      this.pagesize = val;

      if (this.onlyData) {
        this.tableData = this.data.Data.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize);
        if (this.mytable) {
          this.$nextTick(() => {
            this.data.Data.forEach((row) => {
              this.thisSelfRef.toggleRowSelection(row, true);
            });
          });
        } else {
          this.thisSelfRef.clearSelection();
        }
      }
      this.$emit('changeIndex', this.pagesize, this.currentPage);
      // this.$store.dispatch('SET_COMMONPOST', obj);
    },
    handleCurrentChange(val) {
      // if(this.onlyData){
      this.currentPage = val;
      // }
      if (this.onlyData) {
        this.tableData = this.data.Data.slice((this.currentPage - 1) * this.pagesize, this.currentPage * this.pagesize);
        if (this.mytable) {
          this.$nextTick(() => {
            this.data.Data.forEach((row) => {
              this.thisSelfRef.toggleRowSelection(row, true);
            });
          });
        } else {
          this.thisSelfRef.clearSelection();
        }
      }
      this.$emit('changeIndex', this.pagesize, this.currentPage);
    },
    cellDbClick() {
      // console.log(row, column);
      // this.index = this.index + 1;
      // this.$store.dispatch('SET_COLUMN', column.property);
      // let index = this.data.Data.indexOf(row);
      // this.$store.dispatch('SET_INDEX', index);
      // this.$store.commit('SET_ROW', row);
      this.index = 0;
    },
    rowDblclick(row) {
      // console.log(row, column);
      let index = this.data.Data.indexOf(row);
      // this.$store.dispatch('SET_ROWINDEX', index);
      this.$emit('rowdblclick', row, index);
    },
    /*
     *  当表格的排序条件发生变化的时候会触发该事件
     *  @params {column}
     */
    sortchange() {
      // console.log(column, this.tableData);
    },
    // 导出当前页03excel
    // curExcel() {
    //   // var parm = '';
    //   // const self = this;
    //   // for (let key in self.exportQueryParams) {
    //   //   parm += key + '=' + self.exportQueryParams[key] + '&';
    //   // }
    //   // console.log(parm.slice(0, -1));
    // },
    // todo 导出接口未完成
    allExcel() {
      let parm = '';
      const self = this;
      for (let key in self.exportQueryParams) {
        if (key === 'pageSize' || key === 'page') { continue; }
        parm += key + '=' + self.exportQueryParams[key] + '&';
      }
      parm = parm.substr(0, parm.length - 1);
      window.open(`/api/employment/query/personMultiple/export?${parm}`);
    },
  },
};
</script>

<style lang="less" scoped>
.none {
  display: none !important;
}
.ep-table {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  flex: 1;
  width: 100%;
  max-width: 100%;
  background-color: #fff;
  font-size: 14px;
  color: #606266;
}

.ep-title-filter {
  background: #fafbfa;
  position: absolute;
  z-index: 1000;
  right: 10px;
  top: 1px;
  display: flex;
  align-items: center;
  min-height: 47px;
  /deep/ i {
    font-size: 14px !important;
    color: #888 !important;
  }
}
/deep/ .el-table-column--selection{
  text-align: center;
}
/deep/ .el-table__header-wrapper {
  border-width: 1px 1px 0 1px;
  border-style: solid;
  border-color: #ebeef5;
  width: auto;
}

/deep/ .el-table__header th {
  background: #fafbfa !important;
  color: #333;
  padding-top: 6px;
  padding-bottom: 6px;
}

/deep/ .el-table--enable-row-transition .el-table__body td {
  padding: 0;
}

/*/deep/ .el-table th>.cell {*/
/*padding: 0 30px;*/
/*}*/

/deep/ .el-table td > .cell {
  padding: 0;
}

/deep/ .el-table tr td {
  padding: 0;
}

/deep/ .el-pagination {
  float: right;
  margin-top: 10px;
  margin-bottom: 10px;
}
.togle {
  // padding: 3px 5px 3px 5px;
  margin-top: 3px;
  margin-right: 10px;
  height: 16px;
}
.flyBtn {
  float: right;
  margin-left: 10px;
  margin-top: 10px;
  font-size: 0;
  // position: relative;
  // right: 40px;
  // top: -45px;
  // margin-left: -32px;
}
// .flyBtnb {
//   float: right;
//   margin-right: 10px;
//   // position: relative;
//   // right: 0px;
//   // top: -45px;
//   // margin-left: -32px;
// }
.toolsBar {
  margin:0 5px 5px;
  height: 30px;
  // width: 100%;
  // margin-top: 48px;
  // border-bottom: 1px solid #9A9A9A;
  // margin-bottom: 10px
  img{
    cursor: pointer;
  }
}
/deep/ .mainTable {
  border: 0px;
  .el-table__body-wrapper {
    .el-table__empty-block {
      height: 0px;
      min-height: 0px;
    }
  }
}
/deep/ .singleTable {
  .el-table__header-wrapper {
    border: 0px;
  }
}
.victims {
  height: 0px;
  min-height: 0px;
}
.flyTitle {
  position: fixed;
  top: 0px;
  z-index: 999;
}
.disFly {
  margin-top: 58px;
}
</style>
