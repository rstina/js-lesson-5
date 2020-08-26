import React from 'react'

export default function ButtonSend(props) {
  // en prop vi skickar in ska(!) inte förändras. Därför är const rätt variabel
  // deconstructing prop
  const {label} = props
  return (
    <button className="btn btn-primary btn-block">{label}</button>
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