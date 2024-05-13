import Link from 'next/link'
import NewsList from '../../../../components/news-list'
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth
} from '../../../../lib/news'
import { News } from '../../../../dummy-news'

const FilteredNewsPage = ({ params }) => {
  const filter = params.filter
  const year: string = filter?.[0]
  const month: string = filter?.[1]
  let news: News[]
  let links = getAvailableNewsYears()

  if (year && !month) {
    news = getNewsForYear(year)
    links = getAvailableNewsMonths(year)
  }

  if (year && month) {
    news = getNewsForYearAndMonth(year, month)
    links = []
  }

  let newsContent = <p>No news found for the selected period.</p>

  if (news && news.length > 0) {
    newsContent = (
      <ul className="news-list">
        <NewsList newsList={news}></NewsList>
      </ul>
    )
  }
  if (
    (year && !getAvailableNewsYears().includes(+year)) ||
    (month && !getAvailableNewsMonths(+year).includes(+month))
  ) {
    throw new Error('Invalid filter.')
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map(link => {
            const href = year ? `/archive/${year}/${link}` : `archive/${link}`

            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      {newsContent}
    </header>
  )
}

export default FilteredNewsPage
