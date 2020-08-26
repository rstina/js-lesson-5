import React from 'react';
// bild som ligger som syskonbild som användes i template
// import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
// importera bootstrap (går att importera från deras egen sida med länk i index.html under mappen "public")
import 'bootstrap/dist/css/bootstrap.css'
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';

function App() {
  // useState returnerar en variabel och en funktion
  // default value satt till 0, useState(0)
  const [counter, setCounter] = useState(0)

  // default värde objekt eftersom det är det som ska sparas. Förväntad typ som default helt enkelt
  const [chatRoomData, setChatRoomData] = useState({})

  // useEffect(() => {
  // useEffect består av tre delar
  // 1 körs när komponenten initieras (komponentens första önskan)
  // 2 return: körs när komponenten försvinner från sidan (komponentens sista önskan)

  // }, [
      // 3 ovan körs när dessa variabler ändras
      // ])
  // bra att använda för att hämta hem data, med tex fetch

  useEffect(() => {
     // 1 körs när komponenten initieras
    console.log("1")
    const url ="https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json"
    
    fetch(url)
    .then( response => {
      // gör om från json
      console.log("2")
      return response.json()
      // returnerar ett promise som nästa then tar hand om
    })
    .then( data => {
      console.log("4")
      console.log(data)
      setChatRoomData(data)
    })
    console.log("3")
  }, [])

  function handleOnClick () {
    setCounter(counter + 1)
    console.log(counter)
  }

  return (
    // JSX
    // css klasser ska läggas i className
      <div className="container">
        {/* hämtade namnet från aktuella rummet */}
        {/* kopplade ett onClick */}
        <h1 onClick={handleOnClick}>{chatRoomData.name} - {counter}</h1>

        <div className="row">
          <div className="col-md-12">
            {/* // importera från ovan */}
            {/* skulle gå att skriva "{ MessageForm() }"
            men man skriver <MessageForm /> eftersom den returnerar JSX */}
            {/* prop "label" skickar med texten till label */}
            <MessageForm 
              label="Enter a message: " 
              placeholder="Message..." 
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            {/* lista med meddelanden */}
            {/* kör inte inna vi fått några messages */}
            {/* finns chatRoomData.messages ? true : false */}
            {/* rendera ut om sant render tom sträng om falskt */}
            { chatRoomData.messages ? <MessageList messages={chatRoomData.messages} /> : ""  }
          </div>
        </div>

      </div>
  );
}

export default App;