const state = {
  user: {},
  isLogin: false,
  footIdx: 0,
  headTitle: '首页',
  footItems: [
    {
      path: '/home',
      itemClass: '',
      iconClass: 'icon1',
      title: '首页'
    },
    {
      path: '/topic',
      itemClass: '',
      iconClass: 'icon2',
      title: '专题'
    },
    {
      path: '/sort',
      itemClass: '',
      iconClass: 'icon3',
      title: '分类'
    },
    {
      path: '/cart',
      itemClass: '',
      iconClass: 'icon4',
      title: '购物车'
    },
    {
      path: '/me',
      itemClass: '',
      iconClass: 'icon5',
      title: '个人中心'
    }
  ],
  icons: [
    true,
    false,
    false,
    false,
    false
  ]
}

export default state
