<template>
  <el-col :span="Number(colspan)">
    <el-form-item
      :prop="name"
      :label-width="labelWidth + 'px'"
      :label="label"
      :title="label || placeholder"
      v-if="!ishide"
    >
      <el-input
        :title="inputvalue"
        :disabled="eleDisabled || false"
        :name="name"
        v-model="inputvalue"
        @input="changeValue"
        :placeholder="placeholder"
        :maxlength="Number(maxlength)"
        :id="'input' + name"
        :data-disableEnter="disableEnter"
        @change="onChange"
        @blur="onBlur"
        @focus="onFocus"
        @keyup.enter.native="onEnter">
        <i class="el-input__icon el-icon-search" slot="suffix" v-show="isClick" @click="onClick"></i>
      </el-input>
    </el-form-item>
  </el-col>
</template>

<script type="es6">
export default {
  name: 'ep-input',
  props: {
    // 默认值
    value: {
      type: [String, Number],
      default: ''
    },
    // input 前 lable 的名字
    label: {
      type: String,
      default: ''
    },
    // input 前 lable 的宽度
    labelWidth: {
      type: [String, Number],
      default: '100'
    },
    // placeholder 占位符
    placeholder: {
      type: String,
      default: '请输入'
    },


    // 原生 name 属性
    name: {
      type: String,
      default: ''
    },
    // el-col 宽度设置
    colspan: {
      type: [String, Number],
      default: '24'
    },
    // 最大长度
    maxlength: {
      type: [String, Number],
      default: '200'
    },
    // 是否显示 input 右侧小图标
    isClick: {
      type: Boolean,
      default: false
    },

    // 设置显示隐藏
    ishide: {
      type: Boolean,
      default: false
    },
    // 是否禁止编辑
    eleDisabled: {
      type: Boolean,
      default: false
    },
    // 此组件index，多用于遍历
    indexNumber: {
      type: [String, Number],
      default: 0
    },
    // data-disableEnter 标记
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
  data () {
    return {
      inputvalue: this.value
    }
  },
  // computed: {},
  // created () {},
  // mounted () {},
  methods: {
    /** * input右侧小按钮点击触发 */
    onClick () {
      this.$emit('onClick-icon', this.name, this.inputvalue, this.indexNumber)
    },


    /** * 在 Input 值改变时触发 */
    changeValue () {
      console.log('this.inputvalue:',this.inputvalue);
      this.$emit('onRealTimeChange', this.name, this.inputvalue, this.indexNumber )
    },
    /** * 仅在输入框失去焦点或用户按下回车时触发 */
    onChange () {
      this.$emit('onChange', this.name, this.inputvalue, this.indexNumber )
    },
    /** * 在 Input 失去焦点时触发	 */
    onBlur () {
      this.$emit('onBlur', this.name, this.inputvalue, this.indexNumber )
    },
    /** * 在 Input 获得焦点时触发	 */
    onFocus () {
      this.$emit('onFocus', this.name, this.inputvalue, this.indexNumber)
    },
    /** * 原生事件 -- 敲击回车时触发 */
    onEnter () {
      this.$emit('onEnter', this.name, this.inputvalue, this.indexNumber)
    },
  }
}
</script>

<style lang="less" scoped>
  .el-icon-search {
    color:#1890ff;
    cursor: pointer;
  }
</style>
