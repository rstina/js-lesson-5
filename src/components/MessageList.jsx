import React from 'react'
import MessageItem from './MessageItem'

export default function MessageList({messages}) {
  // vi får ett objekt som innehåller flera objekt istället för en array som vi skulle önska
  // gör om till array
  // Object gör om till en array md andra arrayer
  const messageArray = Object.entries(messages)

  // map()
  // går igenom ellr utför något på arrayen
  // skapar en ny array
  // måste ha en return 
  // map vill ha tillbaka alla värden tillskillnad från filter()

  return(
    <ul className="list-group">
      {
        messageArray.map( item => {
          // samma sak som nedan
          // return <MessageItem key={item[0]} message={item[1].message} />

          const key = item[0]
          const messageData = item[1]
          const message = messageData.message
          return <MessageItem key={key} message={message} />
        })
      }
    </ul>
  )
}