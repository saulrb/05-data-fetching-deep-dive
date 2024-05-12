import React, { FC } from 'react'
import Link from 'next/link'
import { DUMMY_NEWS } from '../../../dummy-news'
import { notFound } from 'next/navigation'

type Props = {
  params: any
}

const NewsDetailPage: FC<Props> = ({ params }) => {
  const newsSlug = params.slug
  const newsItem = DUMMY_NEWS.find(newsItem => newsItem.slug === newsSlug)
  if (!newsItem) {
    notFound()
  }
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time datetime={newsItem.date}>{newsItem.date.toDateString()}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  )
}

export default NewsDetailPage
