import Goal from './Goal'
import { Goal as CGoal } from '../App'

type GoalListProps = {
  goals: CGoal[] //goals prop inherits type from App.ts
  onDeleteGoal: (id: number) => void //this function is not supposed to return anything
}

export default function GoalList({ goals, onDeleteGoal }: GoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </Goal>
        </li>
      ))}
    </ul>
  )
}
