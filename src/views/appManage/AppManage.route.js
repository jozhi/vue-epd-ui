const button = () => import('./button')
const input = () => import('./input')
const select = () => import('./select')
const table = () => import('./table')


export default [
  {
    path: '/button',
    name: 'button',
    meta: {title: 'button'},
    component: button
  },
  {
    path: '/input',
    name: 'input',
    meta: {title: 'input'},
    component: input
  },
  {
    path: '/select',
    name: 'select',
    meta: {title: 'select'},
    component: select
  },
  {
    path: '/table',
    name: 'table',
    meta: {title: 'table'},
    component: table
  },
]

