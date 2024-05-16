'use client'
import React, { FC } from 'react'

type Props = {
  error: Error
}

const FilterError: FC<Props> = props => {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{props.error.message}</p>
    </div>
  )
}

export default FilterError
