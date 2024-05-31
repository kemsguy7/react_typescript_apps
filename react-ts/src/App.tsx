import { useState } from 'react'
import Goal from './components/Goal'
import Header from './components/Header'
import goalsImg from './assets/goals.jpeg'


export default function App() {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1> My Course Goals</h1>
      </Header>
      <Goal title="React + TS">
        <p>
          <em> Learn it from the ground up! </em>
        </p>
      </Goal>
    </main>
  )
}
