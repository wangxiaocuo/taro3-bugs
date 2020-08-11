import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { CoverView, CoverImage } from '@tarojs/components'

import './index.scss'

import informationIcon from '../assets/images/tab-bar/information.png'
import informationIconHL from '../assets/images/tab-bar/information-hl.png'
import activityIcon from '../assets/images/tab-bar/activity.png'
import activityIconHL from '../assets/images/tab-bar/activity-hl.png'
import vehicleIcon from '../assets/images/tab-bar/vehicle.png'
import vehicleIconHL from '../assets/images/tab-bar/vehicle-hl.png'
import mineIcon from '../assets/images/tab-bar/mine.png'
import mineIconHL from '../assets/images/tab-bar/mine-hl.png'

class Index extends Component {
  state = {
    selected: 0,
    color: '#acadae',
    selectedColor: '#50b6d2',
    list: [
      {
        pagePath: '/pages/information/index',
        text: '资讯',
        iconPath: informationIcon,
        selectedIconPath: informationIconHL
      },
      {
        pagePath: '/pages/activity/index',
        text: '活动',
        iconPath: activityIcon,
        selectedIconPath: activityIconHL
      },
      {
        pagePath: '/pages/vehicle/index',
        text: '车型',
        iconPath: vehicleIcon,
        selectedIconPath: vehicleIconHL
      },
      {
        pagePath: '/pages/mine/index',
        text: '我的',
        iconPath: mineIcon,
        selectedIconPath: mineIconHL
      }
    ]
  }

  switchTab(index, url) {
    this.setState({
      selected: index
    })
    Taro.switchTab({ url })
  }

  render() {
    const { list, selected, color, selectedColor } = this.state

    console.log(selected)

    return (
      <CoverView className='tab-bar'>
        <CoverView className='tab-bar-border'></CoverView>
        {list.map((item, index) => {
          return (
            <CoverView key={index} className='tab-bar-item' onClick={this.switchTab.bind(this, index, item.pagePath)}>
              <CoverImage src={selected === index ? item.selectedIconPath : item.iconPath}></CoverImage>
              <CoverView style={{ color: selected === index ? selectedColor : color }}>{item.text}</CoverView>
            </CoverView>
          )
        })}
      </CoverView>
    )
  }
}

export default Index
