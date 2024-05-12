import React, { FC } from 'react'
import NewsList from '../../components/news-list'
import { DUMMY_NEWS } from '../../dummy-news'

const NewsPage: FC = () => {
  return (
    <>
      <h1>News Page</h1>
      <ul className="news-list">
        <NewsList newsList={DUMMY_NEWS}></NewsList>
      </ul>
    </>
  )
}

export default NewsPage
