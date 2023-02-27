import React from 'react'
import CardSrc from './CardSrc';


function DemoProps(props) {
    function formatDate(date) {
        return date.toLocaleDateString();
      }
  return (
    <div>
        <div className='card'>
            <div >
            <CardSrc avathar={props.avathar}/>
            </div>  
            <div>
                <h3>{props.avathar.name} </h3>
                <p>{props.text}</p>
                <code>{formatDate(props.date)}</code>
            </div>  
        </div>    
    </div>
  )
}



export default DemoProps