// 介绍模块
import baseModule from '../views/baseModule.route'

// 表单元素模块
import AppManageRouter from '../views/appManage/AppManage.route'

export default [
  ...baseModule,
  ...AppManageRouter
]