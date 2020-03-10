import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const LandingPage = props => {
  return (
    <div>
      <h1>Home Sweet Home</h1>
      <li>
        <NavLink to='/users'>Go to users</NavLink>
      </li>
    </div>
  )
}

LandingPage.propTypes = {}

export default LandingPage
