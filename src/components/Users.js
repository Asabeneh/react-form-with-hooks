import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import User from './User'
import PropTypes from 'prop-types'

const Users = ({ users }) => {
  const userList = users.map(user => <User user={user} />)
  return (
    <>
      <div>
        <h1>{users.length}</h1>
        <ul>
          <li>
            <NavLink to='/add-user'>Add User</NavLink>
          </li>
        </ul>
      </div>
      <div className='users'>{userList}</div>
    </>
  )
}

Users.propTypes = {
  users: PropTypes.array.isRequired
}

export default Users
