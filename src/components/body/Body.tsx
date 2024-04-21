'use client'
import Footer from '@/components/footer/Footer'
import Header from '../header/Header'
import styled from 'styled-components'
import { applyGradient } from '@/palette/palette'
import { Provider } from 'react-redux'
import store from '@/store/store'
import ModalsContainer from '../modal/ModalsContainer'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/libs/i18n'

const StyledBody = styled.body`
  background-image: ${applyGradient('lawrencium')};
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: auto 1fr auto;
  overflow-x: hidden;
  padding: 0 10vw;

  main {
    overflow-y: auto;
  }
`

type Props = {
  className: string
  children: React.ReactNode
}

const Body: React.FC<Props> = ({ className, children }) => {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <StyledBody className={className}>
          <Header />
          <main>{children}</main>
          <Footer />
          <ModalsContainer />
        </StyledBody>
      </I18nextProvider>
    </Provider>
  )
}

export default Body
