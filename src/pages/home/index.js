import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button'
const home = () => {
  return (
    <div>
        <h1>Home</h1>
      <Link to="/login">Ir para login</Link>
        <Button/>
        <Button variant="secondary"/>
        </div>
  )
}

export default home