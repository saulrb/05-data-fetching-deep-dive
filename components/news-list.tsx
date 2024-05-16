import React, { FC } from 'react'
import Link from 'next/link'
import { News } from '../lib/dummy-news'

type Props = {
  newsList: News[]
}

const NewsList: FC<Props> = prop => {
  return (
    <>
      {prop.newsList.map(newsItem => (
        <li key={newsItem.id}>
          <Link href={`/news/${newsItem.slug}`}>
            <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
            <span>{newsItem.title}</span>
          </Link>
        </li>
      ))}
    </>
  )
}

export default NewsList
