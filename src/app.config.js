export default {
  pages: ['pages/information/index', 'pages/activity/index', 'pages/vehicle/index', 'pages/mine/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    custom: true,
    color: '#000000',
    selectedColor: '#000000',
    backgroundColor: '#000000',
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
