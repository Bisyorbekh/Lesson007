import React, {memo} from 'react'

// Memo ==> Child componrnt qayta rendor bo'lishini oldini oladi 
function Child() {
    console.log("Child render");
  return (
    <div>
        <h2>Child</h2>
    </div>
  )
}

export default memo(Child)