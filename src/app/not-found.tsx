'use client'

import { globalRoutes } from '@/routes/routes'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div>
      NotFound
      <Link href={globalRoutes.homePage.path}>Return Home</Link>
    </div>
  )
}

export default NotFound
