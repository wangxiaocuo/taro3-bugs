export default {
  pages: ['pages/information/index', 'pages/activity/index', 'pages/vehicle/index', 'pages/mine/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    // TODO: issue: https://github.com/NervJS/taro/issues/7302
    // 复现时，开启custom
    // custom: true,
    color: '#000000',
    selectedColor: '#00f',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/information/index',
        text: '资讯'
      },
      {
        pagePath: 'pages/activity/index',
        text: '活动'
      },
      {
        pagePath: 'pages/vehicle/index',
        text: '车型'
      },
      {
        pagePath: 'pages/mine/index',
        text: '我的'
      }
    ]
  },
  usingComponents: {}
}
