import React, { FC } from 'react'
import NewsList from '~/news-list'
import { getAllNews } from '~/news'

const NewsPage: FC = async () => {
  const news = await getAllNews()

  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        <NewsList newsList={news}></NewsList>
      </ul>
    </>
  )
}

export default NewsPage
