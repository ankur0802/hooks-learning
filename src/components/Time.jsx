import React, {useState} from 'react'

export default function Time() {
    const date = new Date();
    let TimeNow = date.toLocaleTimeString()
    const [timenow, settimenow] = useState(TimeNow)

    const RefreshTime = ()=>{
      settimenow( new Date().toLocaleTimeString())
    }

  return (
    <>
    <div className='center'>
    <p>{timenow}</p>
    <button className="btn #673ab7 deep-purple" onClick={RefreshTime}>
        Click Me
      </button>
      </div>
    </>

  )
}
