<template>
  <el-table-column
    :fixed="fixed"
    :type="editor === 'index' ? 'index' : ''"
    :prop="name"
    :label="header"
    :sortable="sortable"
    align="center"
    :width="width"
    v-if="
      titleList.length >= 0 && titleList.indexOf(header) == '-1' && titleControl
    "
  >
    <template slot-scope="scope">
      <span v-if="editor === 'index'">{{ scope.$index + 1 }}</span>
      <template v-else-if="editor === 'checkbox'">
        <el-checkbox
          @change="checkItem($event, scope.row, scope)"
        ></el-checkbox>
      </template>
      <template v-else-if="editor === ''">
        <div class="tableColumnInputStyle02" :style="SelfStyle">
          <span>{{scope.row[name] ||''}}</span>
        </div>
      </template>
      <template v-else-if="editor === 'timepicker'">
        <div
          class="tableColumnInputStyle"
          style="display: flex;align-items: center;"
        >
          <el-time-picker
            :title="scope.row[name]"
            :format="timepickerformat"
            :value-format="timevalueformat"
            style="margin-top:1px;"
            v-model="scope.row[name]"
            is-range
            range-separator="-"
            start-placeholder="开始"
            end-placeholder="结束"
            placeholder="选择时间范围"
            @keyup.native.enter="keyEnter($event, scope.row[name], scope)"
          ></el-time-picker>
        </div>
      </template>
      <template v-else-if="editor === 'text'">
        <div class="tableColumnInputStyle02" :style="SelfStyle">
          <span>{{
            typeof scope.row[name] == "object"
              ? scope.row[name].value
              : scope.row[name] == ""
              ? "--"
              : scope.row[name]
          }}</span>
        </div>
      </template>
      <template v-else-if="editor === 'textNoLine'">
        <div class="tableColumnInputStyle02" :style="SelfStyle">
          <span>{{typeof(scope.row[name]) == 'object'?scope.row[name].value:scope.row[name]}}</span>
        </div>
      </template>
      <template v-else-if="editor === 'toNumber'">
        <div class="tableColumnInputStyle02" :style="SelfStyle">
          <span>{{
            typeof scope.row[name] == "object"
              ? scope.row[name].value
              : (scope.row[name] == "" ? "--" : scope.row[name]) | toDecimal2
          }}</span>
        </div>
      </template>
      <template v-else-if="editor === 'button'">
        <div class="tableColumnInputStyle02">
          <slot :row="scope"></slot>
        </div>
      </template>
      <template v-else-if="editor === 'date'">
        <div class="after tableColumnInputStyle">
          <el-date-picker
            :title="scope.row[name]"
            :picker-options="pickerOptions"
            :format="format"
            :value-format="valueFormat"
            @change="onChange(scope.row[name], scope)"
            :type="dateType"
            :clearable="false"
            :disabled="isdisabled"
            v-model="scope.row[name]"
            @focus="getEditor(scope.row[name], scope)"
            @keyup.native.enter="keyEnter($event, scope.row[name], scope)"
          ></el-date-picker>
        </div>
      </template>
      <template v-else-if="editor === 'textinput'">
        <div
          class="tableColumnInputStyle"
          v-if="typeof scope.row[name] == 'object' ? true : false"
        >
          <el-input
            :title="scope.row[name]"
            :class="[
              textAlignRight||textAlignRightZdy ? 'textAlignRight' : '',
              isRed ? 'isRed' : ''
            ]"
            v-model.trim="scope.row[name].value"
            @change="onChange(scope.row[name], scope)"
            @input.native="changeValue(scope.row, name, $event)"
            :disabled="isdisabled"
            :maxlength="maxlength"
            @focus="onFocus(scope.row[name], scope)"
            @keyup.native.enter="keyEnter($event, scope.row[name], scope)"
            clearable
          ></el-input>
        </div>
        <div class="tableColumnInputStyle" v-else>
          <el-input
            :title="scope.row[name]"
            :class="[
              textAlignRight||textAlignRightZdy ? 'textAlignRight' : '',
              isRed ? 'isRed' : ''
            ]"
            :disabled="isdisabled"
            @input.native="changeValue(scope.row, name, $event)"
            v-model="scope.row[name]"
            @change="onChange(scope.row[name], scope)"
            clearable
            @focus="onFocus(scope.row[name], scope)"
            @keyup.native.enter="keyEnter($event, scope.row[name], scope)"
          ></el-input>
        </div>
      </template>
      <template v-else-if="editor === 'number'">
        <div class="tableColumnInputStyle">
          <el-input-number
            :title="scope.row[name]"
            v-model="scope.row[name]"
            @change="onChange(scope.row[name], scope)"
            :disabled="isdisabled"
            :precision="precision"
            clearable
            @keyup.native.enter="keyEnter($event, scope.row[name], scope)"
          ></el-input-number>
        </div>
      </template>
      <template v-else-if="editor === 'select'">
        <div class="tableColumnInputStyle03">
          <el-select
            clearable
            :disabled="isdisabled"
            @change="onChange(scope.row[name], scope)"
            v-model="scope.row[name]"
            filterable
            @keyup.native.enter="keyEnter($event, scope.row[name], scope)"
          >
            <el-option
              v-for="item in selectoptions"
              :key="item.key"
              :title="item.value + ' - ' + item.key"
              :label="addtext ? item.value + ' - ' + item.key : item.value"
              :value="item.key"
            ></el-option>
          </el-select>
        </div>
      </template>
      <template v-else-if="editor === 'selectmultiple'">
        <div class="tableColumnInputStyle04">
          <el-select
            clearable
            :disabled="isdisabled"
            multiple
            @change="onChange(scope.row[name], scope)"
            v-model="scope.row[name]"
            filterable
            @keyup.native.enter="keyEnter($event, scope.row[name], scope)"
          >
            <el-option
              v-for="item in selectoptions"
              :key="item.key"
              :title="item[`${keyvalue}`] + ' - ' + item[`${lablevalue}`]"
              :label="item[`${keyvalue}`] + ' - ' + item[`${lablevalue}`]"
              :value="item[`${keyvalue}`]"
            ></el-option>
          </el-select>
        </div>
      </template>
    </template>
    <slot name="children"></slot>
  </el-table-column>
</template>

<script type="es6">
import dict from './dict/dict.js'
export default {
  props: {
    addtext: {
      type: Boolean,
      default: false
    },
    inputtype: {
      type: String,
      default: 'text'
    },
    keyvalue: {
      type: String,
      default: 'key'
    },
    lablevalue: {
      type: String,
      default: 'value'
    },
    SelfDictionaries: {
      type: Array,
      default: function() {
        return []
      }
    },
    money: {
      type: Boolean,
      default: false
    },
    isCalculate: {
      type: Boolean,
      default: false
    },
    maxlength: {
      type: Number,
      default: 99
    },
    precision: {
      type: Number,
      default: 0
    },
    isRed: {
      type: Boolean,
      default: false
    },
    textAlignRight: {
      type: Boolean,
      default: false
    },
    textAlignRightZdy: {// 需要表格字段为空
      type: Boolean,
      default: false
    },
    SelectValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择...'
    },
    fixed: {
      type: [String, Boolean],
      default: false
    },
    width: {
      type: String,
      default: ''
    },
    SelfStyle: {
      type: Object,
      default: function() {
        return {}
      }
    },
    header: {
      type: String,
      default: ''
    },
    name: {
      type: [String, Number],
      default: ''
    },
    editor: {
      type: String,
      default: ''
    },
    sortable: {
      type: Boolean,
      default: false
    },
    isdisabled: {
      type: Boolean,
      default: false
    },
    timepickerformat: {
      type: String,
      default: 'HH:mm'
    },
    timevalueformat: {
      type: String,
      default: 'HH:mm'
    },
    format: {
      type: String,
      default: 'yyyy-MM-dd'
    },
    valueFormat: {
      type: String,
      default: 'yyyyMMdd'
    },
    edited: {
      type: Boolean,
      default: false
    },
    dateType: {
      type: String,
      default: 'date'
    },
    codetype: {
      type: String,
      default: ''
    },
    hidden: {
      type: Boolean,
      default: false
    },
    isChange: {
      type: Boolean,
      default: false
    },
    datas: {
      type: Object,
      default: null
    },
    multiple: {
      type: Boolean,
      default: false
    },
    limittoday: {
      type: Boolean,
      default: false
    },
    yewuqi: {
      type: Boolean,
      default: false
    },
    limitafter: {
      type: Boolean,
      default: false
    },
    ForbiddenTime: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  created() {
    this.selectoptions = dict[this.name] // 查询对应加载项 selectoptions
    this.SelfDictionaries.length === 0
      ? (this.selectoptions = dict[this.name])
      : (this.selectoptions = this.SelfDictionaries) // 查询对应加载项 selectoptions 或者加载传入项
  },
  computed: {
    selIndex() {
      return this.$store.getters.selIndex
    },
    row() {
      return this.$store.getters.row
    },
    rowDbClick() {
      return this.$store.getters.dbClick
    },
    rowIndex() {
      return this.$store.getters.rowIndex
    },
    column() {
      return this.$store.getters.column
    },
    codeTypes: {
      get: function() {
        // console.log(this.$store.getters.codeTypes && this.$store.getters.codeTypes.id)
        let codeTypes =
          (sessionStorage.getItem(this.$route.path) &&
            JSON.parse(sessionStorage.getItem(this.$route.path))) ||
          null
        return codeTypes
      },
      set: function(newVal) {
        if (newVal === null) return
        clearInterval(this.time)
        this.selData(newVal[this.codetype])
        return newVal
      }
    },
    isCodeType() {
      return this.$parent.$parent.isCodeType
    },
    tableData() {
      return this.$parent.$parent.data.Data || []
    },
    titleList() {
      return this.$parent.$parent.list || []
    },
    titleFilter() {
      return this.$parent.$parent.titleFilter || []
    },
    pathName() {
      return this.$parent.$parent.pathName
    },
    // 这里获得到父组件的变量，用于判断当前列是否要显示
    titleControl() {
      const self = this
      var titleObj = this.$parent.$parent.tableTitle// 绑定Table.vue中的tableTitle
      for (var i in titleObj) {
        if (titleObj[i].title === self.header) {
          return titleObj[i].checked// 勾选为true
        }
      }
      return true
    }

  },
  watch: {
    // 禁用时间段加监听事件
    ForbiddenTime: {
      handler(value) {
        this.ForbiddenTime = value
        this.pickerOptions = this.date()
      },
      deep: true
    },
    rowIndex: {
      handler(value) {
        return value
      },
      deep: true
    },
    codeTypes: {
      handler(value) {
        if (this.codetype) {
          this.selData(value[this.codetype])
        }
      },
      deep: true
    },
    SelfDictionaries: {
      handler(newValue) {
        // console.log(newValue, oldValue);
        this.SelfDictionaries.length === 0
          ? (this.selectoptions = dict[this.name])
          : (this.selectoptions = newValue) // 查询对应加载项 selectoptions 或者加载传入项
      },
      deep: true
    }
  },
  data() {
    return {
      checked: [],
      selectoptions: [],
      time: null,
      selectList: [],
      pickerOptions: this.date()
    }
  },
  filters: {
    totext: function(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  mounted() {
    let self = this
    this.time = setInterval(() => {
      self.codeTypes =
        (sessionStorage.getItem(this.$route.path) &&
          JSON.parse(sessionStorage.getItem(this.$route.path))) ||
        null
    }, 100)
    // document.onclick = function() {
    //   self.$store.dispatch('SET_INDEX', -1)
    // }
  },
  methods: {
    date() {
      // console.log(this.ForbiddenTime);
      // let self = this
      if (this.limittoday) {
        return {
          disabledDate(time) {
            return time.getTime() > Date.now() // 开始时间不选时，结束时间最大值小于等于当天
          }
        }
      } else if (this.limitafter) {
        return {
          disabledDate(time) {
            return time.getTime() <= Date.now() - 8.64e7// 之前的时间不能选
          }
        }
      } else if (this.yewuqi) {
        return {
          disabledDate(time) {
            var now = new Date()
            var nowMonth = now.getMonth() + 2
            var nowYear = now.getFullYear()
            var monthStartDate = new Date(nowYear, nowMonth, 1)
            return time.getTime() > monthStartDate - 8.64e7// 之前的时间不能选
          }
        }
      } else if (this.ForbiddenTime.length !== 0) {
        let start =
          this.ForbiddenTime[0].substring(0, 4) +
          '-' +
          this.ForbiddenTime[0].substring(4, 6) +
          '-' +
          this.ForbiddenTime[0].substring(6, 8)
        let end =
          this.ForbiddenTime[1].substring(0, 4) +
          '-' +
          this.ForbiddenTime[1].substring(4, 6) +
          '-' +
          this.ForbiddenTime[1].substring(6, 8)
        return {
          disabledDate(time) {
            return time <= new Date(start) || time >= new Date(end)
          }
        }
      }
    },
    changeform() {
      // console.log(val,name);
    },
    getEditor(data, scope) {
      this.$emit('tableClick', data, scope)
    },
    checkItem(e, val, scope) {
      this.$emit('ischose', e, val, scope)
    },
    selData(value) {
      if (value && value.length > 0) {
        this.selectList = value
      }
    },
    keyEnter(Event, data, scope) {
      this.nextInputEle(Event)
      this.$emit('TableEnter', data, this.name, scope.$index)
      this.$emit('nextInput', Event)
    },
    // 跳入下一个 input
    nextInputEle(Event) {
      const $td = Event.path[4].nextSibling
      // console.log(Event)
      function validDom(td) {
        if (td) {
          if (td.querySelector('input')) {
            if (td.querySelector('input').getAttribute('disabled')) {
              console.log('disabled')
              validDom(td.nextSibling)
            } else {
              setOnFocus(td.querySelector('input'))
            }
          }
          if (td.querySelector('select')) {
            if (td.querySelector('select').getAttribute('disabled')) {
              validDom(td.nextSibling)
            } else {
              setOnFocus(td.querySelector('select'))
            }
          }
        }
      }
      function setOnFocus(ele) {
        ele.focus()
      }
      // 验证这个td下是否有可聚焦的元素
      validDom($td)
    },
    onChange(data, scope) {
      if (this.inputtype === 'number1' && data === '-') {
        scope.row[this.name] = ''
        return
      }
      let obj
      if (this.editor === 'select') {
        // 单选
        obj = this.selectoptions.find(item => {
          if (item.key === scope.row[this.name]) {
            return item
          }
        })
        this.$emit('TableChange', data, this.name, scope.$index, obj)
      } else if (this.editor === 'selectmultiple') {
        // 多选
        let keyvalue = []
        for (let index = 0; index < data.length; index++) {
          this.selectoptions.find(item => {
            if (item.key === data[index]) {
              keyvalue.push(item)
              return keyvalue
            }
          })
        }
        this.$emit('TableChange', data, this.name, scope.$index, keyvalue)
      } else if (this.textAlignRight) {
        // 金额自动补全
        scope.row[this.name] = Number(scope.row[this.name]).toFixed(2)
        this.$emit('TableChange', scope.row[this.name], this.name, scope.$index, this.header)
      } else if (this.textAlignRightZdy) {
        // 金额自动补全
        if (scope.row[this.name] !== '') {
          scope.row[this.name] = Number(scope.row[this.name]).toFixed(2)
        }
        this.$emit('TableChange', scope.row[this.name], this.name, scope.$index, this.header)
      } else if (this.editor === 'textinput') {
        if (this.money) {
          let reg = /^[0-9]\d*$/
          let regTwo = /^(([1-9]+|0)\.([0-9]{1,2}))$/
          if (regTwo.test(data)) {
            if (data.split('.')[1].length === 1 && reg.test(data.split('.')[1])) {
              scope.row[this.name] = `${data}0`
            } else if (data.split('.')[1].length === 0) {
              scope.row[this.name] = `${data}00`
            }
          }
          if (reg.test(data)) {
            scope.row[this.name] = `${data}.00`
          }
        }
        this.$emit('TableChange', data, this.name, scope.$index, this.header)
      } else {
        this.$emit('TableChange', data, this.name, scope.$index, this.header)
      }
      if (this.isCalculate) {
        this.$emit(
          'calculate-condition-changes',
          this.inputvalue,
          this.name,
          this.indexNum
        )
      }
    },
    onFocus(data, scope) {
      this.$emit('TableFocus', data, this.name, scope.$index)
    },
    changeValue(row, key, value) {
      this.$nextTick(() => {
        if (this.inputtype === 'number') {
          if (/^(0|([1-9][0-9]*)|(([0]\.\d{0,2}|[1-9][0-9]*\.\d{0,2})))$/.test(value.target.value.trim())) {
            if (value.target.value.trim().indexOf('.') > 0 && value.target.value.trim().length > 16) {
              row[key] = value.target.value.trim().split('.')[0].slice(0, 16) + '.' + value.target.value.trim().split('.')[1]
            } else {
              row[key] = value.target.value.trim().slice(0, this.maxlength)
            }
          } else {
            row[key] = value.target.value.substring(0, value.target.value.length - 1).replace(/[^0-9.]/g, '')
          }
        } else if (this.inputtype === 'number1') { // number1允许负数
          if (/-?(0|[1-9]\d*)(\.\d+)?/.test(value.target.value.trim()) || value.target.value.trim() === '-') {
            if (value.target.value.trim().indexOf('.') > 0 && value.target.value.trim().length > 16) {
              row[key] = value.target.value.trim().split('.')[0].slice(0, 16) + '.' + value.target.value.trim().split('.')[1]
            } else {
              row[key] = value.target.value.trim().slice(0, this.maxlength)
            }
          } else {
            row[key] = value.target.value.substring(0, value.target.value.length - 1).replace(/[^0-9.]/g, '')
          }
        } else if (this.inputtype === 'text') {
          row[key] = value.target.value.trim().slice(0, this.maxlength)
        } else if (this.inputtype === 'PositiveInteger') { // 正整数
          if (/^[0-9]+$/.test(value.target.value.trim())) {
            row[key] = value.target.value.trim().slice(0, this.maxlength)
          } else {
            row[key] = value.target.value.substring(0, value.target.value.length - 1).replace(/[^1-9.]/g, '')
          }
        } else if (this.inputtype === 'zerotoone') { // 0.00 - 1.00
          if (/^(0|1|(1\.0{0,2})|(0\.\d{0,2}))$/.test(value.target.value)) {
            row[key] = value.target.value.trim().slice(0, this.maxlength)
          } else {
            row[key] = value.target.value.substring(0, value.target.value.length - 1)
          }
        } else {
          row[key] = value.target.value.trim()
        }
      })
      // 监听回车键触发
      if (value.keyCode === 13) {
        this.nextInputEle(value)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.isRed {
  /deep/.el-input__inner {
    color: red;
  }
}
.el-checkbox.is-checked .el-checkbox__inner {
  background-color: #409eff;
  border-color: #409eff;
}

.el-checkbox.is-checked .el-checkbox__inner:after {
  transform: rotate(45deg) scaleY(1);
}

.el-checkbox__inner:after {
  box-sizing: content-box;
  content: "";
  border: 1px solid #fff;
  border-left: 0;
  border-top: 0;
  height: 7px;
  left: 4px;
  position: absolute;
  top: 1px;
  transform: rotate(45deg) scaleY(0);
  width: 3px;
  transition: transform 0.15s ease-in 0.05s;
  transform-origin: center;
}

.ep-table-item {
  padding: 0 10px;
  display: inherit;
  height: 45px;
  line-height: 45px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.ep-table-item.is-edited {
  background: #f7f7f7 url("./img/icon_angle.png") no-repeat right top;
}

.el-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  margin: 0 !important;
}
/deep/.el-date-editor .el-range-separator {
  line-height: normal;
  width: 7%;
}
/deep/.el-date-editor .el-range__icon {
  line-height: 20px;
}
/deep/.el-date-editor .el-range__close-icon {
  line-height: 20px;
}
.textAlignRight /deep/.el-input__inner {
  text-align: right !important;
  height: 30px !important;
}
/deep/.el-input__inner {
  vertical-align: baseline;
  transition: all 999s;
  height: 30px !important;
}
/deep/.el-input__icon {
  align-items: center;
  display: flex;
}
</style>
