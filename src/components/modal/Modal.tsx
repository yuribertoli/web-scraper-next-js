import {
  Backdrop,
  CloseIconWrapper,
  MODAL_FADE_EFFECT_DURATION,
  PositionWrapper,
  Wrapper,
} from './Modal.style'
import { useEffect, useState } from 'react'
import { RuleSet } from 'styled-components'
import { CloseIcon } from '../icons/Icons'

type Props = {
  visible: boolean
  children: React.ReactNode
  onClose?: () => void
  customStyle?: RuleSet<object>
  hideCloseButton?: boolean
}

const Modal: React.FC<Props> = ({
  visible,
  hideCloseButton,
  customStyle,
  children,
  onClose,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [backdropTransition, setBackdropTransition] = useState(false)

  useEffect(() => {
    if (visible) {
      setIsOpen(true)
      const timerIdBackdrop = setTimeout(() => {
        setBackdropTransition(true)
      }, MODAL_FADE_EFFECT_DURATION / 2)

      return () => {
        clearTimeout(timerIdBackdrop)
      }
    } else {
      setBackdropTransition(false)
      const timerIdOpen = setTimeout(() => {
        setIsOpen(false)
      }, MODAL_FADE_EFFECT_DURATION)

      return () => {
        clearTimeout(timerIdOpen)
      }
    }
  }, [visible])

  if (!isOpen) return null

  return (
    <Backdrop
      customStyle={customStyle}
      visible={backdropTransition}
      className='modal-backdrop'
      onClick={onClose}
    >
      <Wrapper className='modal-wrapper'>
        <PositionWrapper className='modal-position-wrapper'>
          {!hideCloseButton && (
            <CloseIconWrapper className='modal-close-icon-wrapper'>
              <CloseIcon />
            </CloseIconWrapper>
          )}
          <div
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              e.stopPropagation()
            }}
          >
            {children}
          </div>
        </PositionWrapper>
      </Wrapper>
    </Backdrop>
  )
}

export default Modal
