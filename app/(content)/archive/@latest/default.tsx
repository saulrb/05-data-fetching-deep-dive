import { getLatestNews } from '~/news'
import NewsList from '~/news-list'

const LatestNewsPage = async () => {
  const latestNews = await getLatestNews()
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
