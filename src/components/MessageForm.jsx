import React from 'react'
import ButtonSend from './ButtonSend'

// egen message app för formuläret, en egen komponent (js-funktion som returnerar JSX)
export default function MessageForm( props ) {
  // {} visar att det är en prop    -     { label } = props.label 
  // { label } är en deconstructing av props:en label
  // prop, "label" tar emot label texten och renderar ut den
  // props ett objekt som har en key=label (enter your message)
  // props är ett objekt vi kan populera med olika relevanta keys
  // const label = props.label
  // const {label} = props

  // sparar label och placeholder från props så man inte skulle behövt skriva props.label etc nedan
  // const {label, placeholder} = props
  return (
    <div className="form-group">
      <label>{props.label}</label>
      <input type="text" className="form-control" placeholder={props.placeholder}></input>
      <ButtonSend label="Send"/>
    </div>
  )
}