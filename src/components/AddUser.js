import React, { useState } from 'react'

const AddUser = ({ addUser, history }) => {
  const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    country: ''
  }
  const [formData, setFormData] = useState(initialState)

  const handleChange = e => {
    const { name, value } = e.target
    const newData = { ...formData, [name]: value }
    setFormData(newData)
  }
  const handleSubmit = e => {
    e.preventDefault()
    addUser(formData)
    history.push('/users')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type='text'
          name='country'
          placeholder='Country'
          value={formData.country}
          onChange={handleChange}
        />
      </div>
      <div>
        <button>Add</button>
      </div>
    </form>
  )
}

export default AddUser
