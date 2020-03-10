import React from 'react'
import PropTypes from 'prop-types'

const User = ({ user }) => {
  const { firstName, lastName, email, country } = user
  return (
    <div className='user'>
      <h1>
        {firstName} {lastName}
      </h1>
      <h2>{email}</h2>
      <h2>{country}</h2>
      <hr />
    </div>
  )
}

User.propTypes = {
  user: PropTypes.object.isRequired
}

export default User
