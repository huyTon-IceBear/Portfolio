import React from 'react'
import './index.scss'

const HeartAnimatedButton = ({ text }) => {
  return (
    <div class="heart-btn">
      <div class="content">
        <span class="heart"></span>
        <span class="text">{text}</span>
      </div>
    </div>
  )
}

export default HeartAnimatedButton
