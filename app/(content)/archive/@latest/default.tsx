import { getLatestNews } from '~/news'
import NewsList from '~/news-list'

const LatestNewsPage = () => {
  const latestNews = getLatestNews()
  return (
    <>
      <h2>Latest News</h2>
      <ul className="news-list">
        <NewsList newsList={latestNews}></NewsList>
      </ul>
    </>
  )
}

export default LatestNewsPage
