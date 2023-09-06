// experiment with useReducer hook: apply it to a counter component
import {ReactNode} from "react"
import {useCounter, useCounterText} from "../context/CounterContext";

// SET UP COUNTER COMPONENT
// children type 
type ChildrenType = {
  children: (num: number) => ReactNode 
}
  
const Counter = ({children}: ChildrenType) => {
  const {count, increment, decrement} = useCounter()
  const {text, textInputHandler} = useCounterText()

  return(
    <>
      <h1>{children(count)}</h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button> <br/>
      <input type='text' onChange={textInputHandler} value={text}/> <br/>
      <h2> Input text: {text} </h2>
    </>
  )
}

export default Counter