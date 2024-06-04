import Goal from './Goal'

type GoalListProps = {
  goals: {
    title: string
    description: string
    id: number
  }[]
}

export default function GoalList({ goals }: GoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal title={goal.title}>
            <p>
              <goal.description>
            </p>
          </Goal>
        </li>
      ))}
    </ul>
  )
}
