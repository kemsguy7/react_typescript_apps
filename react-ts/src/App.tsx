import { useState } from 'react'
import Goal from './components/Goal'
import Header from './components/Header'
import goalsImg from './assets/goals.jpeg'
import GoalList from './components/GoalList'

export type Goal = {
  title: string
  description: string
  id: number
}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([])

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: 'Learn React + TS',
        description: 'Learn it in depth',
      }
      return [...prevGoals, newGoal]
    })
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1> My Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal </button>
      <GoalList goals={goals} />
      {/* goals in curly braces signify the state while goals outside is the props gotten from GoalList component */}
    </main>
  )
}
