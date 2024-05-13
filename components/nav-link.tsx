'use client'
import React, { FC, ReactElement } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type Props = {
  href: string
  children: ReactElement | string
}

const NavLink: FC<Props> = ({ href, children }) => {
  const path = usePathname()
  return (
    <Link href={href} className={path.startsWith(href) ? 'active' : undefined}>
      {children}
    </Link>
  )
}

export default NavLink
