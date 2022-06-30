import React from 'react'
import './leftasidebar.css'
import {
  HomeOutlined,
  FormatListBulletedOutlined,
  CategoryOutlined,
  GroupsOutlined,
  LayersOutlined,
  PhotoSizeSelectActualOutlined,
  VideoLibraryOutlined,
  ScheduleOutlined,
  ListOutlined,
  SettingsOutlined,
  LogoutOutlined,
} from '@mui/icons-material/'

import { useSelector } from 'react-redux'
import { selectUser } from '../api/nameSlice'

const Leftasidebar = () => {
  const user = useSelector(selectUser)
  return (
    <div className='leftbarsideContainer'>
      <ul style={{ listStyle: 'none' }}>
        <div className='left'>
          <li>
            <HomeOutlined style={{ marginRight: '15px' }} /> Homepage
          </li>
          <li>
            <FormatListBulletedOutlined style={{ marginRight: '15px' }} /> List
          </li>
          <li>
            <CategoryOutlined style={{ marginRight: '15px' }} /> Products
          </li>
          <li>
            <GroupsOutlined style={{ marginRight: '15px' }} /> Groups
          </li>
          <li>
            <LayersOutlined style={{ marginRight: '15px' }} /> Pages
          </li>
          <li>
            <PhotoSizeSelectActualOutlined style={{ marginRight: '15px' }} />
            Photos
          </li>
          <li>
            <VideoLibraryOutlined style={{ marginRight: '15px' }} /> Videos
          </li>
          <li>
            <ScheduleOutlined style={{ marginRight: '15px' }} /> Schedule
          </li>
          <li>
            <ListOutlined style={{ marginRight: '15px' }} /> WishList
          </li>
          <li>
            <SettingsOutlined style={{ marginRight: '15px' }} /> Settings
          </li>
          {user && (
            <li>
              <LogoutOutlined style={{ marginRight: '15px' }} /> Logout ( {user}
              )
            </li>
          )}
        </div>
      </ul>
    </div>
  )
}

export default Leftasidebar
