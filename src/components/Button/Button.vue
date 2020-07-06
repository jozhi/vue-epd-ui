<template>
    <el-button :type="type" :disabled="disabled" :plain="plain" :round="round" :circle="circle" :icon="icon"
      :loading="loading" :size="size" :style="{marginTop: top + 'px', marginBottom: bottom + 'px'}"
      @click="btn">{{ name === '' ? '请填写name属性' : name }}
    </el-button>
</template>

<script type="es6">
export default {
  name: 'ep-button',
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    api: {
      type: String,
      default: 'doQuery'
    },
    datas: {
      type: Object,
      default: null
    },
    top: {
      type: String,
      default: '0'
    },
    bottom: {
      type: String,
      default: '0'
    },
    isNext: {
      type: Boolean,
      default: false
    },
    isPrev: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // steps: {
    //   get: function () {
    //     return this.$store.getters.steps
    //   },
    //   set: function (newValue) {
    //     return newValue
    //   }
    // }
  },
  watch: {
    // steps: {
    //   handler (value) {
    //     return value
    //   },
    //   deep: true
    // },
    disabled: {
      handler (value) {
        return value
      },
      deep: true
    }
  },
  methods: {
    btn () {
      // 针对分步处理
      // if (this.isNext) {
      //   if (this.steps < 2) {
      //     Object.keys(this.datas).forEach(item => {
      //       this.$router.push({
      //         path: this.$route.path,
      //         query: {
      //           ...this.datas[item]
      //         }
      //       })
      //       this.$store.dispatch('SET_STEPS', this.steps += 1)
      //     })
      //   }
      //   return
      // }
      // if (this.isPrev) {
      //   if (this.steps > 0) {
      //     this.$store.dispatch('SET_STEPS', this.steps -= 1)
      //   }
      //   return
      // }
      // let api = this.api === '' ? 'doQuery' : this.api
      // let obj = {
      //   path: this.$route.path + '/' + api + '/' + this.id,
      //   params: {
      //     ...this.datas,
      //     path: this.$route.path
      //   }
      // }
      // this.$store.dispatch('SET_COMMONPOST', obj)
    }
  }
}
</script>

<style lang="less">

</style>
