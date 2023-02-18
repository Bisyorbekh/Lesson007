import React from 'react'
import Child from './Child'
import File from './File';

function Parent() {
    const [count, setCount] = React.useState(0)
    console.log("Parent render");
  return (
    <div>
        <h1>memo vs useMemo (reactjs hooks)</h1>
        <h2>Parent: {count}</h2>
        <button onClick={()=> setCount(p=>p+1)}>Increment</button>
        <Child/>
        <File/>
    </div>
  )
}

export default Parent   