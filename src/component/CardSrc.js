import React from 'react'

function CardSrc(props) {
  return (
    <div>
        <img src={props.avathar.url} alt={props.avathar.name} className="card_img"/>
    </div>
  )
}

export default CardSrc