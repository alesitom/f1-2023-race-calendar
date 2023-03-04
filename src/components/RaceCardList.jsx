import React from 'react'
import '../styles/stylesheet.css'


const RaceCardList = ({ list }) => {
  return (
    <div className='race-card-component-container text-teal'>
      <div>
        <h1 className='component-title'>Formula 1 - 2023 race calendar</h1>
      </div>
      <div className='card-container'>
        {list.map((race, index) => (
          <div className='card-box' key={index}>
            <p>{race.name}</p>
          </div>

        ))}
      </div>
    </div>
  )
}

export default RaceCardList