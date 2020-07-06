<template>
  <el-col :span="Number(colspan)">
    <!-- <el-form-item :prop="name" :label-width="labelWidth + 'px'" :label="label" :title="label" v-if="!ishide"> -->
      <el-select
        :disabled="eleDisabled"
        ref="mySelect"
        :multiple="multiple"
        :collapse-tags="collapse"
        @change="onChange"
        @visible-change="selectData"
        :name="name"
        :size="size"
        :title="selValuename"
        :clearable="clearable"
        v-model="selValue"
        style="position: relative;width:100%"
        filterable
        :filter-method="search"
        :id="'input' + name"
        @clear="clear"
        :placeholder="placeholder"
      >
        <el-option v-for="(item,index) in selectoptions" :key="index" :label="item[`${lablevalue}`]" :disabled="item.disabled" :value="item[`${keyvalue}`]">
          <span style="float: left">{{`${lablevalue}`=='label'?item[`${lablevalue}`]:item[`${keyvalue}`]+ ' - ' + item[`${lablevalue}`]}}</span>
        </el-option>
      </el-select>
    <!-- </el-form-item> -->
  </el-col>
</template>

<script type="es6">
const Dictionaries = []
export default {
  name: 'ep-select',
  props: {
    branchComment: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    firstCan: {
      type: Boolean,
      default: true
    },
    noList: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: true
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
      default: function () {
        return []
      }
    },
    ishide: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Array, Object],
      default: ''
    },
    eleDisabled: {
      type: Boolean,
      default: false
    },
    p: {
      type: String,
      default: 'R'
    },
    colspan: {
      type: String,
      default: '24'
    },
    labelWidth: {
      type: String,
      default: '140'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    name: {
      type: String,
      default: ''
    },
    indexNum: {
      type: Number,
      default: 0
    },
    multiple: {
      type: Boolean,
      default: false
    },
    collapse: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selValuename: '',
      selectoptions: [],
      selectoptionsResult: [],
      show: false,
      text: '',
      selectList: [],
      selValue: '',
      branchOne: false,
      branchTwo: false,
      isCanBao: true,
      time: null,
      a: '',
      id: ''
    }
  },
  created () {
    this.isCanBao = this.firstCan
    this.selValue = this.value
    if (this.branchComment) {
      let isComment = this.selValue.findIndex(item => {
        return item === '00'
      })
      if (isComment > -1) {
        this.branchOne = false
        this.branchTwo = true
      } else if (isComment <= -1) {
        this.branchOne = true
        this.branchTwo = false
      } else {
        this.branchOne = false
        this.branchTwo = false
      }
    }
    if (!this.noList) {
      this.SelfDictionaries.length === 0 ? (this.selectoptions = Dictionaries[this.name]) : (this.selectoptions = this.SelfDictionaries) // 查询对应加载项 selectoptions 或者加载传入项
    } else {
      this.selectoptions = this.SelfDictionaries
    }
    if (location.port === '8587' || location.port === '8588') {
      if (this.name === 'bankCode') {
        this.$api
          .commonGet('/archive/common/getParam', {
            paramType: 'AAF200',
            regionCode: this.$store.state.loginuserInfo.areaId || '000000'
          })
          .then(res => {
            if (res.success) {
              if (res.result.length > 0) {
                this.selectoptions = res.result
                this.selectoptionsResult = res.result
              }
            }
          })
      }
    }
  },
  computed: {},
  watch: {
    selectoptions: {
      handler () {
        if (this.selectoptionsResult.length > 0) {
          this.selectoptions = this.selectoptionsResult
        }
      },
      deep: true
    },
    firstCan: {
      handler (val) {
        this.isCanBao = val
      },
      deep: true
    },
    value: {
      // console.log(newvalue)
      handler (val) {
        this.selValue = val
        if (this.branchComment) {
          let isComment = this.selValue.findIndex(item => {
            return item === '00'
          })
          if (isComment > -1) {
            this.branchOne = false
            this.branchTwo = true
          } else if (isComment <= -1) {
            this.branchOne = true
            this.branchTwo = false
          } else {
            this.branchOne = false
            this.branchTwo = false
          }
        }
      },
      deep: true
      // this.onChange(newvalue)
    },
    SelfDictionaries: {
      handler (newValue) {
        if (!this.noList) {
          this.SelfDictionaries.length === 0 ? (this.selectoptions = Dictionaries[this.name]) : (this.selectoptions = newValue) // 查询对应加载项 selectoptions 或者加载传入项
        } else {
          this.selectoptions = newValue
        }
      },
      deep: true
    }
  },
  mounted () {},
  methods: {
    search (val) {
      this.selectoptions = []
      let whichfilter
      if (!this.noList) {
        this.SelfDictionaries.length === 0 ? (whichfilter = Dictionaries[this.name]) : (whichfilter = this.SelfDictionaries)
      } else {
        whichfilter = this.SelfDictionaries
      }
      if (val) {
        whichfilter.filter(item => {
          if (!!~item[this.keyvalue].indexOf(val) || !!~item[this.lablevalue].indexOf(val) || !!~item[this.keyvalue].indexOf(val.toUpperCase())) {
            this.selectoptions.push({
              [this.keyvalue]: item[this.keyvalue],
              [this.lablevalue]: item[this.lablevalue]
            })
            // 多选是可能会因为多选框下拉列表数据变化而失去汉字
          }
        })
        // 单选框逻辑
        if ((this.selectoptions.length > 0) & !this.multiple) {
          this.selValue = val
          if (this.selectoptions.length === 1) {
            this.onChange(this.selectoptions[0][this.keyvalue])
            this.$refs.mySelect.handleClose()
          }
        } else {
          if (!this.multiple) {
            this.selectoptions = []
          }
        }
      } else {
        if (!this.noList) {
          this.SelfDictionaries.length === 0 ? (this.selectoptions = Dictionaries[this.name]) : (this.selectoptions = this.SelfDictionaries) // 查询对应加载项 selectoptions 或者加载传入项
        } else {
          this.selectoptions = this.SelfDictionaries
        }
      }
    },
    clear () {
      if (!this.noList) {
        this.SelfDictionaries.length === 0 ? (this.selectoptions = Dictionaries[this.name]) : (this.selectoptions = this.SelfDictionaries) // 查询对应加载项 selectoptions 或者加载传入项
      } else {
        this.selectoptions = this.SelfDictionaries
      }
    },
    selectData () {
      if (!this.noList) {
        this.SelfDictionaries.length === 0 ? (this.selectoptions = Dictionaries[this.name]) : (this.selectoptions = this.SelfDictionaries) // 查询对应加载项 selectoptions 或者加载传入项
      } else {
        this.selectoptions = this.SelfDictionaries
      }
    },
    onChange (val) {
      console.log(val)
      if (this.multiple) {
        // 多选
        let keyvalue = []
        for (let index = 0; index < val.length; index++) {
          this.selectoptions.find(item => {
            if (item.key === val[index]) {
              keyvalue.push(item)
              return keyvalue
            }
          })
        }
        this.$emit('select-message', val, this.name, keyvalue, this.indexNum)
      } else {
        // 单选
        let obj = this.selectoptions.find(item => {
          if (item.key === val || item.value === val) {
            return item
          }
        })
        // if (obj[this.lablevalue]) {
        //   this.selValuename = obj[this.lablevalue]
        // }暂时
        this.selValue = val
        this.$emit('calculate-condition-changes')
        this.$emit('select-message', val, this.name, obj, this.indexNum)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.input-focus {
  border: 1px solid #4ca2fb;
}

.active {
  color: #3bb2ff;
  font-weight: 700;
  background-color: #e1f9ff;
}

.ac {
  background-color: #e1f9ff;
  color: #3bb2ff;
  font-weight: 700;
}

.ep-select .ep-scrollbar li:hover {
  background-color: #e1f9ff;
  color: #3bb2ff;
}

.ep-input-search {
  width: 100%;
  /deep/ .el-input__inner {
    border: 0 !important;
  }
}

.ep-select {
  /deep/ .el-input__inner {
    border: 0;
    height: inherit;
  }
  .el-input__suffix-inner {
    .el-icon-error {
      display: none;
    }
  }
  &:hover /deep/ .el-input__suffix-inner {
    .el-icon-error {
      display: block;
      font-size: 14px;
    }
  }
}

.ep-select .ep-scrollbar .el-pagination {
  border-top: 0;
  padding-top: 0;
}

.ep-pagination-column {
  border-top: 1px solid #efefef;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
}

/deep/ .el-select {
  width: 100%;
  min-height: 40px;
}

/deep/ .is-error .el-input.is-disabled .el-input__inner {
  border-color: #f56c6c;
}

@media screen and (min-width: 410px) and (max-width: 1366px) {
  /deep/ .el-select {
    min-height: 30px;
    /*line-height: 30px;*/
  }
}
</style>
