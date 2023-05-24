import styled, { css } from 'styled-components'
import { defaultTheme } from '../../../../styles/themes/default'

export type IconVariantTypes = 'cart' | 'timer' | 'package' | 'coffee'

interface IconVariantProps {
  variant: IconVariantTypes
}

const iconVariant = {
  cart: defaultTheme.yellowDark,
  timer: defaultTheme.yellow,
  package: defaultTheme.baseLabel,
  coffee: defaultTheme.purple,
}

export const IconContainer = styled.div<IconVariantProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;
  border-radius: 50%;

  ${(props) => {
    return css`
      background: ${iconVariant[props.variant]};
    `
  }}
  color: ${(props) => props.theme.white}
`
