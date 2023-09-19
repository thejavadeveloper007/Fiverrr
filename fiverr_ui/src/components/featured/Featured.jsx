import React from 'react'
import './featured.scss'

const Featured = () => {
  return (
    <div className='featured'>
      <div className='container'>
      <div className='left'>
        <h1>Find the perfect <i>freelance</i> services for your business</h1>
        <div className='search'>
            <div className='search-input'>
              <input type="text" placeholder='Try "building new app"'/>
            </div>
            <button>
              <img src="./img/search.png" alt="search-lens" />
           </button>
        </div>
        <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
      </div>
      <div className='right'>
        <img src="./img/man.png" alt="man" />
      </div>
      </div>
    </div>
  )
}

export default Featured