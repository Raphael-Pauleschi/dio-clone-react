import React from 'react'
import { ButtonContainer } from './styles'

const Button = ({title="placeholder", variant="primary", onClick}) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}

export default Button;