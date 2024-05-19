import React, { FC } from 'react'
import { notFound } from 'next/navigation'

import ModalBackDrop from '~/modal-backdrop'
import { getNewsItem } from '~/news'
type Props = {
  params: any
}

const InterceptedImagePage: FC<Props> = async ({ params }) => {
  const newsSlug = params.slug
  const newsItem = await getNewsItem(newsSlug)

  if (!newsItem) {
    notFound()
  }

  return (
    <>
      <ModalBackDrop />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  )
}

export default InterceptedImagePage
