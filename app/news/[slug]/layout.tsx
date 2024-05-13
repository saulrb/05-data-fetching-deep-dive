import React, { FC, ReactElement } from 'react'

type Props = {
  children: ReactElement
  modal: ReactElement
}

const NewsDetailLayout: FC<Props> = ({ children, modal }) => {
  return (
    <>
      {modal}
      {children}
    </>
  )
}

export default NewsDetailLayout
