import Link from 'next/link'
import NewsList from '~/news-list'
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth
} from '~/news'
import { News } from '~/dummy-news'
import { Suspense } from 'react'

const FilterHeader = async ({ year, month }) => {
  const availableYears = await getAvailableNewsYears()
  let links = availableYears

  if (year && !month) {
    links = getAvailableNewsMonths(year)
  }

  if (year && month) {
    links = []
  }

  if (
    (year && !availableYears.includes(year)) ||
    (month && !getAvailableNewsMonths(year).includes(month))
  ) {
    throw new Error('Invalid filter.')
  }

  return (
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
  )
}

const FilteredNews = async ({ year, month }) => {
  let news: News[]
  if (year && !month) {
    news = await getNewsForYear(year)
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month)
  }

  let newsContent = <p>No news found for the selected period.</p>

  if (news && news.length > 0) {
    newsContent = (
      <ul className="news-list">
        <NewsList newsList={news}></NewsList>
      </ul>
    )
  }
  return newsContent
}

const FilteredNewsPage = async ({ params }) => {
  const filter = params.filter
  const year: string = filter?.[0]
  const month: string = filter?.[1]

  return (
    <header id="archive-header">
      <nav>
        <Suspense fallback={<p>Loading links ...</p>}>
          <FilterHeader year={year} month={month} />
        </Suspense>
      </nav>
      <Suspense fallback={<p>Loading news ...</p>}>
        <FilteredNews year={year} month={month} />
      </Suspense>
    </header>
  )
}

export default FilteredNewsPage
