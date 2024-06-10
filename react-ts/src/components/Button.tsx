import { type ComponentPropsWithoutRef } from 'react'

type ButtonProps = {
  el: 'button '
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = {
  el: 'anchor'
} & ComponentPropsWithoutRef<'a'>

export default function Button(props: ButtonProps | AnchorProps) {
  const { el, ...otherProps } = props //rest is a variable that holds the remaining props

  return <a> </a>

  return <button> </button>
}
