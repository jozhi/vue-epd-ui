<template>
  <el-col :span="Number(colspan)">
    <el-form-item
      :prop="name"
      :label-width="labelWidth + 'px'"
      :label="label"
      :title="label != ''?label:placeholder"
      v-if="ishide === true?false:true"
    >
      <el-input
        :title="inputvalue"
        :disabled="eleDisabled || false"
        :name="name"
        v-model="inputvalue"
        @input="changeValue(inputvalue)"
        :placeholder="placeholder"
        :maxlength="Number(maxlength)"
        :id="'input' + name"
        :data-disableEnter="disableEnter"
        @change="onChange(inputvalue)"
        @blur="onBlur(inputvalue)"
        @focus="onFocus"
        @keyup.enter.native="onEnter">
        <i class="el-input__icon el-icon-search" slot="suffix" v-show="isClick" @click="onClick" style="color:#1890ff;"></i>
      </el-input>
    </el-form-item>
  </el-col>
</template>

<script type="es6">
export default {
  name: 'ep-input',
  props: {
    inputtype: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    money: {
      type: Boolean,
      default: false
    },
    fuMoney: {
      type: Boolean,
      default: false
    },
    wanMoney: {
      type: Boolean,
      default: false
    },
    ishide: {
      type: Boolean,
      default: false
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
      default: '请输入'
    },
    eleDisabled: {
      type: Boolean,
      default: false
    },
    p: {
      type: String,
      default: ''
    },
    type: String,
    maxlength: {
      type: [String, Number]
    },
    name: {
      type: String,
      default: ''
    },
    indexNum: {
      type: Number,
      default: 0
    },
    isClick: {
      type: Boolean,
      default: false
    },
    noTrim: {
      type: Boolean,
      default: false
    },
    isBlur: {
      type: Boolean,
      default: false
    },
    isFocus: {
      type: Boolean,
      default: false
    },
    isRed: {
      type: Boolean,
      default: false
    },
    isCodeType: {
      type: Boolean,
      default: false
    },
    disableEnter: {
      type: String,
      default: 'false'
    }
  },
  watch: {
    value (newValue) {
      this.inputvalue = newValue
    },
    deep: true
  },
  created () {},
  data () {
    return {
      inputvalue: this.value
    }
  },
  computed: {
    // codeTypes() {
    //   return this.$store.getters.codeTypes
    // }
  },
  mounted () {
    // document.getElementById("input" + this.name).style.color = this.isRed
    //   ? "red"
    //   : "";
  },
  methods: {
    changeValue (val) {
      // var aa_bb = 1;
      this.$nextTick(() => {
        if (this.inputtype === 'number') {
          // 小数后两位
          if (/^(([1-9][0-9]*)|(([0]\.\d{0,2}|[1-9][0-9]*\.\d{0,2})))$/.test(val.trim())) {
            this.inputvalue = val.trim().slice(0, this.maxlength)
          } else {
            this.inputvalue = val.substring(0, val.length - 1).replace(/[^0-9.]/g, '')
          }
        } else if (this.inputtype === 'PositiveInteger') {
          // 正整数
          if (/^([1-9]\d*)$/.test(val.trim())) {
            this.inputvalue = val.trim().slice(0, this.maxlength)
          } else {
            this.inputvalue = val.substring(0, val.length - 1).replace(/[^1-9.]/g, '')
          }
        } else if (this.inputtype === 'zerotoone') {
          // 0.00 - 1.00
          if (/^(0|1|(1\.0{0,2})|(0\.\d{0,2}))$/.test(val)) {
            this.inputvalue = val.trim().slice(0, this.maxlength)
          } else {
            this.inputvalue = val.substring(0, val.length - 1).replace(/[^0-9.]/g, '')
          }
        } else if (this.inputtype === 'zerotoone1') {
          // 0.000 - 1.000
          if (/^(0|1|(1\.0{0,3})|(0\.\d{0,3}))$/.test(val)) {
            this.inputvalue = val.trim().slice(0, this.maxlength)
          } else {
            this.inputvalue = val.substring(0, val.length - 1).replace(/[^0-9.]/g, '')
          }
        } else if (this.inputtype === 'zeronumber') {
          // 第一位可以是0
          if (/^(0|([1-9][0-9]*)|(([0]\.\d{0,2}|[1-9][0-9]*\.\d{0,2})))$/.test(val.trim())) {
            this.inputvalue = val.trim().slice(0, this.maxlength)
          } else {
            this.inputvalue = val.substring(0, val.length - 1).replace(/[^0-9.]/g, '')
          }
        } else if (this.inputtype === 'funumber') {
          this.inputvalue = this.plusOrMinus(val.trim())
        } else if (this.inputtype === 'wannumber') {
          // 第一位可以是0
          if (/^(0|([1-9][0-9]*)|(([0]\.\d{0,6}|[1-9][0-9]*\.\d{0,6})))$/.test(val.trim())) {
            this.inputvalue = val.trim().slice(0, this.maxlength)
          } else {
            this.inputvalue = val.substring(0, val.length - 1).replace(/[^0-9.]/g, '')
          }
        } else if (this.inputtype === 'fournumber') {
          // 第一位可以是0
          if (/^(0|([1-9][0-9]*)|(([0]\.\d{0,4}|[1-9][0-9]*\.\d{0,4})))$/.test(val.trim())) {
            this.inputvalue = val.trim().slice(0, this.maxlength)
          } else {
            this.inputvalue = val.substring(0, val.length - 1).replace(/[^0-9.]/g, '')
          }
        }else {
          this.inputvalue = val.trim()
        }
      })
    },
    /**
     * 点击事件
     */
    onClick () {
      // if (!this.isClick) return;
      this.$emit('isClick', this.name, this.inputvalue)
      // let obj = {
      //     path: this.$route.path + '/doQuery/' + this.name,
      //     params: {
      //         path: this.$route.path,
      //         ...this.datas
      //     }
      // };
      // this.$store.dispatch('SET_COMMONPOST', obj);
    },
    /**
     * 选择事件
     */
    onChange (data) {
      if (this.money) {
        let reg = /^[0-9]\d*$/
        let regTwo = /^(([1-9]+|0)\.([0-9]{1,2}))$/
        console.log(data)
        if (regTwo.test(data)) {
          if (data.split('.')[1].length === 1 && reg.test(data.split('.')[1])) {
            this.inputvalue = `${data}0`
          } else if (data.split('.')[1].length === 0) {
            this.inputvalue = `${data}00`
          }
        } else if (reg.test(data)) {
          this.inputvalue = `${data}.00`
        } else if (!data) {
          this.inputvalue = '0.00'
        } else {
          this.inputvalue = '0.00'
        }
      } else if (this.fuMoney) {
        this.inputvalue = this.dealMoney(data)
      }
      this.$emit(
        'calculate-condition-changes',
        this.inputvalue,
        this.name,
        this.indexNum
      )
    },
    /**
     * 失去焦点
     */
    onBlur () {
      this.$emit(
        'input-message',
        this.inputvalue,
        this.name,
        this.indexNum
      )
      // if (!this.isBlur) return
      // let obj = {
      //   path: this.$route.path + '/blur/' + this.name,
      //   params: {
      //     path: this.$route.path,
      //     ...this.datas
      //   }
      // }
      // this.$store.dispatch('SET_COMMONPOST', obj)
    },
    /**
     * 获取焦点
     */
    onFocus () {
      if (this.money) {
        this.$emit('input-onFocus', this.name)
      }
      if (this.fuMoney) {
        this.$emit('input-onFocus', this.name)
      }
    },
    onEnter () {
      this.$emit('input-onEnter', this.name, this.inputvalue, this.indexNum)
    },
    dealMoney (value) {
      if (value.indexOf('.') === -1) {
        value = value + '.00'
      } else if (value.substr(value.indexOf('.') + 1).length === 1) {
        value = value + '0'
      }
      return value
    },
    dealWanMoney (value) {
      if (value.indexOf('.') === -1) {
        value = value + '.000000'
      } else if (value.substr(value.indexOf('.') + 1).length === 1) {
        value = value + '00000'
      } else if (value.substr(value.indexOf('.') + 1).length === 2) {
        value = value + '0000'
      } else if (value.substr(value.indexOf('.') + 1).length === 3) {
        value = value + '000'
      } else if (value.substr(value.indexOf('.') + 1).length === 4) {
        value = value + '00'
      } else if (value.substr(value.indexOf('.') + 1).length === 5) {
        value = value + '0'
      }
      return value
    },
    plusOrMinus (values) {
      let newValue
      if (!/[^0-9.-]/g.test(values)) {
        newValue = values
          .replace(/[^\-\d.]/g, '')
          .replace(/\b(0+){2,}/g, '0')
          // eslint-disable-next-line no-useless-escape
          .replace(/\-{2,}/g, '-')
          .replace(/^\./g, '')
          .replace(/\.{2,}/g, '.')
          .replace('.', '$#$')
          .replace(/\./g, '')
          .replace('$#$', '.')
        if (
          newValue.toString().indexOf('.') > 0 &&
          Number(newValue.toString().split('.')[1].length) > 2
        ) {
          newValue = parseInt(parseFloat(newValue) * 100) / 100
        }
        if (newValue.toString().split('-').length - 1 > 1) {
          newValue = parseFloat(newValue) || ''
        }
        if (
          newValue.toString().split('-').length > 1 &&
          newValue.toString().split('-')[0].length > 0
        ) {
          newValue = parseFloat(newValue) || ''
        }
        if (
          newValue.toString().length > 1 &&
          (newValue.toString().charAt(0) === '0' ||
            (newValue.toString().length > 2 &&
              newValue.toString().charAt(0) === '-' &&
              newValue.toString().charAt(1) === '0' &&
              newValue.toString().charAt(2) !== '.')) &&
          newValue.toString().indexOf('.') < 1
        ) {
          newValue = parseFloat(newValue) || ''
        }
        // 判断整数位最多为9位
        if (
          newValue.toString().indexOf('.') > 0 &&
          Number(newValue.toString().split('.')[0].length) > 9
        ) {
          newValue =
            newValue.toString().substring(0, 9) +
            '.' +
            newValue.toString().split('.')[1]
        } else if (
          newValue.toString().indexOf('.') < 0 &&
          Number(newValue.toString().split('.')[0].length) > 9
        ) {
          newValue = newValue.toString().substring(0, 9)
        }
      } else {
        newValue = values.replace(/[^0-9.-]/g, '')
      }
      return newValue
    }
  }
}
</script>

<style lang="less" scoped>
  .el-icon-search {
    // color: #000;
    cursor: pointer;
  }
</style>
