import { fluidSize } from '@/libs/style'
import styled, { RuleSet, css } from 'styled-components'

export const MODAL_FADE_EFFECT_DURATION = 250

const backdropProps = ['visible', 'customStyle']

export const Backdrop = styled.div.withConfig({
  shouldForwardProp: (prop) => !backdropProps.includes(prop),
})<{
  visible: boolean
  customStyle?: RuleSet<object>
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  background-color: rgba(0, 0, 0, 0.5);
  z-index: ${Number.MAX_SAFE_INTEGER - 1};
  opacity: 0;
  transition: opacity ${MODAL_FADE_EFFECT_DURATION}ms ease-in-out;

  ${({ visible }) =>
    visible &&
    css`
      opacity: 1;
    `}

  ${({ customStyle }) => customStyle}
`

export const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: ${Number.MAX_SAFE_INTEGER};
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`

export const PositionWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`

export const CloseIconWrapper = styled.div`
  margin-left: auto;
  margin-bottom: 4vh;
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${fluidSize(24)};
  height: ${fluidSize(24)};
  border-radius: 50%;
  padding: ${fluidSize(2.5)};
  cursor: pointer;

  &:hover {
    background-color: var(--lightGray);
  }

  svg {
    height: 50%;
    width: 50%;
    fill: var(--blackCoffee);
  }
`
