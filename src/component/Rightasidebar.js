import React from 'react'
import './Rightasidebar.css'
import image1 from '../pictures/rightsidepictures/wallpapers-image-01.jpg'
import image2 from '../pictures/rightsidepictures/13 c.jpg'
import image3 from '../pictures/rightsidepictures/13 b.jpg'
import { ArrowDropDown } from '@mui/icons-material'
import { useSelector } from 'react-redux'
import { selectUser } from '../api/nameSlice'

const Rightasidebar = () => {
  const user = useSelector(selectUser)

  return (
    <div className='rightasidebar'>
      <div className='topicAndimage'>
        <p>Recommended {user ? <span> for {user} </span> : ''}</p>
        <img src={image1} alt='recommended' />
      </div>
      <div className='topicAndimage'>
        <p>Popular on ViMedia</p>
        <img src={image3} alt='recommended' />
      </div>
      <div className='topicAndimage'>
        <p>People's favourite</p>
        <img src={image2} alt='recommended' />
      </div>
      <div className='seeMore'>
        <p style={{ marginLeft: '15px' }}>See more</p>
        <ArrowDropDown />
      </div>
    </div>
  )
}

export default Rightasidebar
