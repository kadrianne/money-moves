import React from 'react'
import Dashboard from './components/Dashboard'
import Navigation from './components/Navigation'
import './css/mystyles.css'


function App() {
  return (
    <div className="app">
      <Navigation />
      <Dashboard />
    </div>
  )
}

export default App;
