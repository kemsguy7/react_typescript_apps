import { type ReactNode } from 'react'

type HintBoxProps = {
  mode: 'hint'
  children: ReactNode
}

type WarningProps = {
  mode: 'warning'
  severity: 'low' | 'medium' | 'high'
  children: ReactNode
}

type InfoBoxProps = HintBoxProps | WarningProps

// type InfoBoxProps = { previous that caused errors
//   mode: 'hint' | 'warning'
//   severity?: 'low' | 'medium' | 'high' //this can be optional
//   children: ReactNode
// }

export default function InfoBox(props: InfoBoxProps) {
  const { children, mode } = props

  if (mode === 'hint') {
    return (
      <aside className="infobox infobox-hint">
        <p> {children}</p>
      </aside>
    )
  }

  const { severity } = props

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2> Warning </h2>
      <p> {children}</p>
    </aside>
  )
}
