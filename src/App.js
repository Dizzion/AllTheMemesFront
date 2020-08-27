import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.scss'
import Header from './components/Header'
import Routes from './routes/Routes'
import { withRouter } from 'react-router-dom'

function App(props) {

  const [user, setUser] = useSessionStorage("user", null)

  const storeUser = (user) => {
    setUser(user)
  }

  const logout = (e) => {
    e.preventDefault()
    sessionStorage.clear()
    setUser(null)
    props.history.push('/memes')
  }

  return (
    <div className="App text-center">
      <Header user={user} logout={logout} />
      <Routes
        user={user}
        storeUser={storeUser}
      />
    </div>
  )
}

export default withRouter(App)

function useSessionStorage(key, initialValue) {

  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = value => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      sessionStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
