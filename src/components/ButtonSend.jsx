import React from 'react'

export default function ButtonSend(props) {
  // en prop vi skickar in ska(!) inte förändras. Därför är const rätt variabel
  // deconstructing prop
  const {label, handleOnClick} = props
  // 1 skriv funktionen som ska anropas
  // 2 skicka ner funkmtionen som prop
  // *3 ta emot propen från parent
  // 4 trigga prop-funktionen när någon tycker på knappen

  return (
    <button 
      // 1 skriv funktionen som ska anropas
      // 2 skicka ner funkmtionen som prop
      // 3 ta emot propen från parent
      // *4 trigga prop-funktionen när någon tycker på knappen
      onClick={ handleOnClick } 
      // trigga handleOnClick när man trycker på komponenten
      //går också att skriva: onClick={ () => handleOnClick() } 
      className="btn btn-primary btn-block">
        {label}
    </button>
  )
}

// --------------------------------------
// samma sak som att skriva (som i App.js)
/*
  function ButtonSend(props) {
   const {label} = props
   return (
     <button>{label}</button>
   )
 }

 export default ButtonSend */

//  --------------------------------------
 // och samma sak som att skriva 
 /*
 ButtonSend = () => { 
   const {label} = props
   return (
     <button>{label}</button>
   )
 }

 export default ButtonSend */