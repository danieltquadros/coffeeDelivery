import styled, { css } from 'styled-components'
import { defaultTheme } from '../../styles/themes/default'

export type IconVariantTypes = 'yellowDark' | 'yellow' | 'baseLabel' | 'purple'

interface IconVariantProps {
  variant: IconVariantTypes
}

const iconVariant = {
  yellowDark: defaultTheme.yellowDark,
  yellow: defaultTheme.yellow,
  baseLabel: defaultTheme.baseLabel,
  purple: defaultTheme.purple,
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
