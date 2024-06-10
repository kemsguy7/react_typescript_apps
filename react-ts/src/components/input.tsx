import { ComponentPropsWithoutRef } from 'react'

type InputProps = {
  label: string
  id: string
} & ComponentPropsWithoutRef<'input'> //This allows the Input component to accept all standard attributes of an HTML input

export default function Input({ label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  )
}
