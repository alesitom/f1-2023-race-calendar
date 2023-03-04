import React from 'react'
import '../src/styles/stylesheet.css'
import RaceCardList from './components/RaceCardList'
import {calendarData} from './data.js'


const App = () => {
  return (
    <div>
      <RaceCardList list={(calendarData)}/>
    </div>
  )
}

export default App