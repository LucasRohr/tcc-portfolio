import React, { useState } from 'react'

import './album.scss'

export default function Album({ list }) {

  const [page, setPage] = useState(0)

  return (
    <div className="album">
      <div className="carousel">
        {list[page].image}
      </div>
      <div className="description">
        {list[page].caption}
      </div>
      <div className="pager-wrapper">
        {list.map((_, i) => {
          return (
            <button 
              className={`pager ${page === i && 'active'}`}
              onClick={() => setPage(i)}
            />
          )
        })}
      </div>
    </div>
  )
}
