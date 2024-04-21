import Button, { ButtonTypes } from '@/components/Button/Button'
import { default as LinkReact } from 'next/link'

type Props = {
  path: string
  text: string
  type: ButtonTypes
  selected?: boolean
}

const Link: React.FC<Props> = ({ path, text, type, selected }) => {
  return (
    <LinkReact href={path}>
      <Button text={text} type={type} selected={selected} />
    </LinkReact>
  )
}

export default Link
