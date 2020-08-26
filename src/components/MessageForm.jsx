import React from 'react'
import ButtonSend from './ButtonSend'
import {useRef} from 'react'

// egen message app för formuläret, en egen komponent (js-funktion som returnerar JSX)
export default function MessageForm( { success, label, placeholder } ) {
  // {} visar att det är en prop    -     { label } = props.label 
  // { label } är en deconstructing av props:en label
  // prop, "label" tar emot label texten och renderar ut den
  // props ett objekt som har en key=label (enter your message)
  // props är ett objekt vi kan populera med olika relevanta keys
  // const label = props.label
  // const {label} = props

  // sparar label och placeholder från props så man inte skulle behövt skriva props.label etc nedan
  // const {label, placeholder} = props

  // vi skapar en variabel som hjälper oss att referara till inputfältet
  // useRef används för att referera till en komponent vi vill komma åt
  // returnerar det objekt som har det som referensvärde
  const messageInputField = useRef()

  // *1 skriv funktionen som ska anropas
  // 2 skicka ner funkmtionen som prop
  // 3 ta emot propen från parent
  // 4 trigga prop-funktionen när någon tycker på knappen
  function handleOnClick(){
    // console.log("klickat på knappen")
    // console.log("hämta det användren skickat in")
    // console.log(messageInputField.current.value)
    const message = messageInputField.current.value
    const url = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json"
    const data = {
      message: message
    }
    fetch(url, {
      method: 'POST',
      // gör om till sträng för att kunna skicka till backend
      body: JSON.stringify(data)
    })
    .then( (response) => {
      console.log("har skickats")
      // när datan har skickats vill man att den talar om det för js
      // så att den hämtar ny data
      // funktion som skickats med som prop
      success()
      messageInputField.current.value = ""
    })
  }

  return (
    <div className="form-group">
      <label>{label}</label>
      <input 
        // referensen, ange ref variabeln så det går att referera till det här input-fieldet
        // måste hette specifikt "ref"
        ref={messageInputField}
        type="text" className="form-control" placeholder={placeholder}></input>
      <ButtonSend 
        // 1 skriv funktionen som ska anropas
        // *2 skicka ner funktionen som prop
        // 3 ta emot propen från parent
        // 4 trigga prop-funktionen när någon tycker på knappen
        handleOnClick={handleOnClick} 
        label="Send"
        // skicka med funktion som prop
      />
    </div>
  )
}