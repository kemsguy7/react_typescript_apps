import { type FC, type PropsWithChildren, ReactNode } from 'react'

// interface GoalProps {
//   title: string
//   children: ReactNode
// }

//Alternative way using functional components
// const Goal: FC<GoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2> {title} </h2>
//         <p> {children} </p>
//       </div>
//       <button>Delete</button>
//     </article>
//   )
// }

//export default Goal

// Alternative approach to the codes above above using a generic typescript function

type GoalProps = PropsWithChildren<{ title: string }> //generic type

export default function Goal({ title, children }: GoalProps) {
  return (
    <article>
      <div>
        <h2> {title} </h2>
        <p> {children} </p>
      </div>
      <button>Delete</button>
    </article>
  )
}
