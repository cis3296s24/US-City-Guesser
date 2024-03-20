import React, { useEffect, useState } from 'react'
import Cities from './cities.json'

function App() {

  let total = 0

  Cities.forEach((city) => total+=city.number)
  
  return (
    <div>
      {Cities.map(city => {
        return (
          <div className='box'>
            <p>{city.city}</p>
            <p>{city.state}</p>
            {total}
          </div>
        )
      })
    }
    </div>
    )
}

export default App