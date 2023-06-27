import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <div>
        <h1>Home</h1>
      <Link to="/login">Ir para login</Link>
        
        </div>
  )
}

export default home