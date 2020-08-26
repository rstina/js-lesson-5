import React from 'react'

// renderar ut meddelanden
export default function MessageItem( {message} ) {
  return(
    <li className="list-group-item">{message}</li>
  )
}