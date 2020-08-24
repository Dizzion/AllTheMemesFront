import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.scss'
import Header from './components/Header'
import Routes from './routes/Routes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { Routes }
      </div>
    )
  }
}

export default App
