import { modalsSelector } from '@/store/selectors/modal'
import { useDispatch, useSelector } from 'react-redux'
import Modal from './Modal'
import { useEffect, useState } from 'react'
import { setLoginModal, setLogoutModal } from '@/store/slices/modal'
import { MODAL_FADE_EFFECT_DURATION } from './Modal.style'

const ModalsContainer: React.FC = () => {
  const dispatch = useDispatch()
  const { login, logout } = useSelector(modalsSelector)

  const [selectedNode, setSelectedNode] = useState<React.ReactNode | null>(null)

  useEffect(() => {
    switch (true) {
      case login:
        setSelectedNode(<div>LOGIN MODAL</div>)
        break
      case logout:
        setSelectedNode(<div>LOGOUT MODAL</div>)
        break
      default:
        const timerIdOpen = setTimeout(() => {
          setSelectedNode(null)
        }, MODAL_FADE_EFFECT_DURATION)
        return () => {
          clearTimeout(timerIdOpen)
        }
    }
  }, [login, logout])

  const onClose = () => {
    switch (true) {
      case login:
        dispatch(setLoginModal(false))
        break
      case logout:
        dispatch(setLogoutModal(false))
        break
    }
  }

  return (
    <Modal hideCloseButton onClose={onClose} visible={!!selectedNode}>
      {selectedNode}
    </Modal>
  )
}

export default ModalsContainer
