import { React, useState } from 'react'
import './Centerasidebar.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectUser,
  update,
  selectUserEmail,
  deleteUser,
} from '../api/nameSlice'

import myDpcenter from '../pictures/My Dp.jpg'

const Centerasidebar = () => {
  const user = useSelector(selectUser)
  const userEmail = useSelector(selectUserEmail)
  const dispatch = useDispatch()

  const handleDelete = (e) => {
    e.preventDefault()
    dispatch(deleteUser())
    console.log('clicked bro')
  }

  const handleCLick = (e) => {
    e.preventDefault()
    if (name && email) {
      dispatch(update({ name, email }))
      setName('')
      setEmail('')
    }
  }

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className='centerasidebar'>
      <h3>Update Your Account</h3>
      <p>
        Deleting account cannot be undone <b>{user}!</b> You should confirm your
        password to delete your account.
      </p>
      <button onClick={handleDelete}>Delete Account</button>
      <div className='infoe'>
        <h5>Profile Picture</h5>
        <div className='profilePicture'>
          <div>
            <img src={myDpcenter} className='imagedp' alt='the dp' />
          </div>
          <p style={{ marginLeft: '10px' }}>Change</p>
        </div>
        <div className='inputField'>
          <form className='button-form'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              placeholder={user}
              name={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              placeholder={userEmail}
              name={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor='password'>Password</label>
            <input type='text' id='password' />
            <button onClick={handleCLick}>Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Centerasidebar
