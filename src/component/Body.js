import React from 'react'
import './body.css'
import Centerasidebar from './Centerasidebar'
import Leftasidebar from './leftasidebar'
import Rightasidebar from './Rightasidebar'

const Body = () => {
  return (
    <div className='bodyContainer'>
      <Leftasidebar />
      <Centerasidebar />
      <Rightasidebar />
    </div>
  )
}

export default Body
