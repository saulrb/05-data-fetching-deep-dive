import React, { FC } from 'react'
import { notFound } from 'next/navigation'
import { DUMMY_NEWS } from '../../../../../dummy-news'
type Props = {
  params: any
}

const InterceptedImagePage: FC<Props> = ({ params }) => {
  const newsSlug = params.slug
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug)

  if (!newsItem) {
    notFound()
  }

  return (
    <>
      <div className="modal-backdrop" />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  )
}

export default InterceptedImagePage
