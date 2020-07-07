const changelog = () => import('./changelog')
const guide = () => import('./guide')


export default [
  {
    path: '/changelog',
    name: 'changelog',
    meta: {title: 'changelog'},
    component: changelog
  },
  {
    path: '/guide',
    name: 'guide',
    meta: {title: 'guide'},
    component: guide
  }
]

