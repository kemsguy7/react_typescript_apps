import { useState } from 'react'
import Goal from './components/Goal'
import Header from './components/Header'
import goalsImg from './assets/goals.jpeg'

type Goal = {
  title: string;
  description: string;
  id: number;
}


export default function App() {

    const [goals, setGoals] = useState<Goal[]>([]);

    function handleAddGoal() {
      console.log('Add Goal')
    }


  return (

    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1> My Course Goals</h1>
      </Header>
      <button>Add Goal </button>
      <Goal title="React + TS">
        <p>
          <em> Learn it from the ground up! </em>
        </p>
      </Goal>
    </main>
  )
}
