import React from 'react'
import './navbar.css'
import myDp from '../pictures/My Dp.jpg'
import { useSelector } from 'react-redux'

import { ArrowDropDown } from '@mui/icons-material/'
import { selectUser } from '../api/nameSlice'

const Navbar = () => {
  const user = useSelector(selectUser)

  return (
    <div className='navbarContainer'>
      <div className='navbarleft'>
        <div className='logoHeader'>ViMedia</div>
        <div className='others'>
          <ul className='homeContact'>
            <li style={{ marginRight: '20px' }}>Home</li>
            <li style={{ marginRight: '20px' }}>About</li>
            <li style={{ marginRight: '20px' }}>Contact</li>
          </ul>
        </div>
      </div>
      <div className='navbarCenter'>
        <input
          type='text'
          placeholder='Search for something'
          style={{
            padding: '5px 10px 5px 30px',
            border: '1px solid teal',
            borderRadius: '10px',
            width: '450px',
          }}
        />
      </div>
      <div className='navbarRight'>
        <div>
          <img
            src={myDp}
            className='imagedp'
            alt='the dp'
            style={{ cursor: 'pointer' }}
          />
        </div>
        <p style={{ marginLeft: '15px' }}>Hi, {user}</p>
        <ArrowDropDown style={{ cursor: 'pointer' }} />
      </div>
    </div>
  )
}

export default Navbar
