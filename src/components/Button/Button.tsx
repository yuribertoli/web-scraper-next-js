import { fluidSize } from '@/libs/style'
import styled, { RuleSet, css } from 'styled-components'

const wrapperProps = ['style']

const Wrapper = styled.button.withConfig({
  shouldForwardProp: (prop) => !wrapperProps.includes(prop),
})<{ style: RuleSet<object> }>`
  all: unset;
  text-transform: uppercase;
  font-size: ${fluidSize(10)};
  text-align: center;
  cursor: pointer;

  &:active {
    transform: translateY(2px);
  }

  ${({ style }) => style}
`

export type ButtonTypes =
  | 'dark'
  | 'light'
  | 'danger'
  | 'warning'
  | 'success'
  | 'info'
  | 'link'

type Props = {
  text: string
  type: ButtonTypes
  selected?: boolean
  onClick?: () => void
}

const Button: React.FC<Props> = ({ text, type, selected, onClick }) => {
  const commonPaddedStyles = css`
    padding: ${fluidSize(5)} ${fluidSize(10)};
    border-radius: 5px;
  `
  let style = css``

  switch (type) {
    case 'dark':
      style = css`
        ${commonPaddedStyles}
        background-color: var(--blackCoffee);
      `
      break
    case 'light':
      style = css`
        ${commonPaddedStyles}
        background-color: var(--white);
        color: var(--blackCoffee);
      `
      break
    case 'danger':
      style = css`
        ${commonPaddedStyles}
        background-color: var(--milanoRed);
      `
      break
    case 'warning':
      style = css`
        ${commonPaddedStyles}
        background-color: var(--mango);
        color: var(--blackCoffee);
      `
      break
    case 'success':
      style = css`
        ${commonPaddedStyles}
        background-color: var(--tree);
      `
      break
    case 'info':
      style = css`
        ${commonPaddedStyles}
        background-color: var(--blue);
      `
      break
    case 'link':
      style = css`
        color: var(--silver);

        &:active {
          transform: none;
        }

        ${selected &&
        css`
          border-radius: 30px;
          color: var(--white);
          outline: 2px solid var(--white);
          outline-offset: 10px;
        `}
      `
      break
  }

  return (
    <Wrapper onClick={() => onClick?.()} style={style}>
      {text}
    </Wrapper>
  )
}

export default Button
