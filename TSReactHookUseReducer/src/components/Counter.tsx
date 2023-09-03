// experiment with useReducer hook: apply it to a counter component

import { ReactNode, useState } from "react"

type ChildrenType = {
  children: (num: number) => ReactNode 
}

const Counter = ({children}: ChildrenType) => {
  // state
  const [count, setCount] = useState<number>(1);

  // click handlers
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);

  return(
    <>
      <h1>{children(count)}</h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </>
  )
}

export default Counter
