import React, { Component } from 'react'
import { View } from '@tarojs/components'

import './index.scss'

class Index extends Component {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const text = `
      正文内容 &nbsp; &nbsp; &nbsp; &nbsp; 正文内容 &nbsp; &nbsp; &nbsp; &nbsp; 正文内容

      &amp; &amp; &amp;

      &lt;	&lt;	&lt;
    `

    return (
      <View className='index'>
        {/* TODO: issue: https://github.com/NervJS/taro/issues/7531 */}
        <View dangerouslySetInnerHTML={{ __html: text }} className='rich-text-container '></View>
      </View>
    )
  }
}

export default Index
