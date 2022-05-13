import React from 'react'
import Card from './Card'

const MainContent = (props) => {
  return (
    <section>
      <h1>Plan a trip with help from local Hosts around the world</h1>
      <div class="cards-container">
        {props.cards.map(id => {
          return <Card id={id} />
        })}
      </div>
    </section>
  )
}

export default MainContent