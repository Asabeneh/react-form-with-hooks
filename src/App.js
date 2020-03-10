import React, { useState } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'
import AddUser from './components/AddUser'
import Users from './components/Users'
import LandingPage from './components/LandingPage'

const App = () => {
  const [users, setUsers] = useState([])
  const addUser = user => {
    // const newUser2 = users.slice()
    // newUser2.push(user)
    // setUsers(newUser2)
    const newUser = [...users, user]
    setUsers(newUser)
  }
  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route
            path='/add-user'
            component={props => <AddUser {...props} addUser={addUser} />}
          />
          <Route
            path='/users'
            component={props => <Users {...props} users={users} />}
          />
          <Route path='/' component={LandingPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
