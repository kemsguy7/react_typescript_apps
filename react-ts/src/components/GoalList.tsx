import { type ReactNode } from 'react'
import Goal from './Goal'
import { Goal as CGoal } from '../App'
import InfoBox from './InfoBox'

type GoalListProps = {
  goals: CGoal[] //goals prop inherits type from App.ts
  onDeleteGoal: (id: number) => void //this function is not supposed to return anything
}

export default function GoalList({ goals, onDeleteGoal }: GoalListProps) {
  //check if goal is empty
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">
        You have no course goals yet. Start adding some!{' '}
      </InfoBox>
    )
  }
  //conditionally show th infobox if we have too many goals
  let warningBox: ReactNode

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    )
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <Goal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </Goal>
          </li>
        ))}
      </ul>
    </>
  )
}
