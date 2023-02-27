import React, { useState } from 'react'

function OnChange() {
    const [change,SetChange]=useState()

    
  return (
    <div>
        <button onClick={()=>SetChange(!change)}>Click</button>
        {change ?<h1>welcome</h1>:<h1>close</h1>}
    </div>
  )
}

export default OnChange