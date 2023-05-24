import React from 'react'
import { IconContainer, IconVariantTypes } from './styles'

interface IconContainerProps {
  variant: IconVariantTypes
  children: React.ReactNode
}

const IconArea = ({ variant, children }: IconContainerProps) => {
  return <IconContainer variant={variant}>{children}</IconContainer>
}

export default IconArea
