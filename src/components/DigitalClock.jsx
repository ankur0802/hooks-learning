import React, { useState } from 'react'

export default function DigitalClock() {
    
    let nowTime = new Date().toLocaleTimeString()
    const [cTime, setCtime] = useState(nowTime)

    const UpdateTime = ()=>{
     nowTime = new Date().toLocaleTimeString()
     setCtime(nowTime)
    }

    setInterval(UpdateTime, 1000)

  return (
    <>
    <div className='center'>
        <h1 >{cTime}</h1>
    </div>
    </>
  )
}
