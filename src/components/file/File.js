import React, {memo, useState, useMemo} from 'react'

// useMemo = biror functionni qayta rendor bo'lishini oldini oladi 
function File() {
    const [son, setSon] = useState(10)
    console.log("File render");

    const apiGet = ()=>{
        console.log("API GET");
        return "Hello World"
    }
    const memoData = useMemo(()=> apiGet(), [])
  return (
    <div>
        <h2>File: {son}</h2>
        <h3>{memoData}</h3>
        <button onClick={()=> setSon(p=>p+10)}>inc</button>
    </div>
  )
}

export default memo(File)