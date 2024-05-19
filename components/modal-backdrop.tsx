'use client'
import React, { FC, ReactElement } from 'react'
import { useRouter } from 'next/navigation'

const ModalBackDrop: FC = () => {
  const router = useRouter()
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
    </>
  )
}

export default ModalBackDrop
