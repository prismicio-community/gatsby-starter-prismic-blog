import * as React from 'react'
import { Link } from 'gatsby'

// Create URL path for numeric pagination
const getPageNumberPath = (currentIndex) => {
  if (currentIndex === 0) {
    return '/1'
  }
  return '/' + (currentIndex + 1)
}

export const Pagination = ({ pageInfo }) => {
  if (!pageInfo) return null
  const { currentPage, pageCount } = pageInfo

  // Create URL path for previous and next buttons
  const prevPagePath =
    currentPage - 1 === 1 ? '/1' : '/' + (currentPage - 1).toString()
  const nextPagePath = '/' + (currentPage + 1).toString()

  // Check if page is first or last to disable previous and next buttons
  const prevClass = currentPage === 1 ? 'disabled' : 'enabled'
  const nextClass = currentPage === pageCount ? 'disabled' : 'enabled'

  return (
    <div className="pagination">
      <Link className={prevClass} to={prevPagePath} rel="prev">
        {'<'}
      </Link>
      {/*  Render numeric pagination  */}
      {Array.from({ length: pageCount }, (_, i) => {
        let numClass = 'pageNumber'
        if (currentPage === i + 1) {
          numClass = 'currentPage'
        }
        return (
          <Link to={getPageNumberPath(i)} className={numClass} key={i + 1}>
            {i + 1}
          </Link>
        )
      })}
      <Link className={nextClass} to={nextPagePath} rel="next">
        {'>'}
      </Link>
    </div>
  )
}
