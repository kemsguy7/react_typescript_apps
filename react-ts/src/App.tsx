// import { useState } from 'react'
// import Goal from './components/Goal'
// import Header from './components/Header'
// import goalsImg from './assets/goals.jpeg'
// import GoalList from './components/GoalList'
// import NewGoal from './components/NewGoal'

// export type Goal = {
//   title: string
//   description: string
//   id: number
// }

// export default function App() {
//   const [goals, setGoals] = useState<Goal[]>([])

//   function handleAddGoal(goal: string, summary: string) {
//     setGoals((prevGoals) => {
//       const newGoal: Goal = {
//         id: Math.random(),
//         title: goal,
//         description: summary,
//       }
//       return [...prevGoals, newGoal] //return an updated array of goals
//     })
//   }

//   function handleDeleteGoal(id: number) {
//     //this function deletes goals based on an id
//     setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id))
//   }

//   return (
//     <main>
//       <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
//         <h1> My Course Goals</h1>
//       </Header>
//       <NewGoal onAddGoal={handleAddGoal} />
//       <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
//       {/* goals in curly braces signify the state while goals outside is the props gotten from GoalList component */}
//     </main>
//   )
// }

//import Input from './components/input'
import Button from './components/Button'
import Container from './components/Container'

function App() {
  return (
    <main>
      {/* <Input label="Your Name" id="name" type="text" />
      <Input label="Age" id="age" type="number" /> */}

      {/* <p>
        <Button> A Button </Button>
      </p>
      <p>
        <Button href="https://www.google.com">A Link</Button>
      </p> */}

      <Container as={Button}> Click Me</Container>
    </main>
  )
}

export default App
