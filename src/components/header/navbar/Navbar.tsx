import { getRoutesByType } from '@/routes/routes'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import Link from '../../Button/Link/Link'
import { usePathname } from 'next/navigation'
import Button from '@/components/Button/Button'
import { useDispatch } from 'react-redux'
import { setLoginModal, setLogoutModal } from '@/store/slices/modal'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 10vh;

  img {
    width: auto;
    height: 50%;
  }

  ul {
    display: flex;
    column-gap: 5vw;
  }
`

const Navbar = () => {
  const { t } = useTranslation()
  const headerLinks = getRoutesByType('header')
  const [admin] = getRoutesByType('role')
  const pathName = usePathname()
  const dispatch = useDispatch()

  const session = true
  const isAdmin = true

  return (
    <Wrapper>
      <Image
        src='https://picsum.photos/200'
        alt='logo'
        width={100}
        height={100}
      />
      <nav>
        <ul>
          {headerLinks.map(({ id, path }) => (
            <Link
              key={id}
              path={path}
              text={id}
              type='link'
              selected={pathName === path}
            />
          ))}
          {isAdmin && session && (
            <Link
              key={admin.id}
              path={admin.path}
              text={admin.id}
              type='link'
              selected={pathName === admin.path}
            />
          )}
          {session ? (
            <Button
              text={t('routes.logout')}
              type='light'
              onClick={() => dispatch(setLogoutModal(true))}
            />
          ) : (
            <Button
              text={t('routes.login')}
              type='light'
              onClick={() => dispatch(setLoginModal(true))}
            />
          )}
        </ul>
      </nav>
    </Wrapper>
  )
}

export default Navbar
