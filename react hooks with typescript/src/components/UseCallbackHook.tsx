// explore use callback with ts, type input handler's event parameter  


/* Note:
  - useCallback is used to memoize a function so it won't be recreated every time the component re/mounts
  - we can specify (or leave blank for inferred typing) 
*/

import{
  useState, 
  useCallback, 
  ChangeEvent
} from 'react'

const UseCallbackHook = () => {
  const [count, setCount] = useState<number>(0) 
  const [luckyNumber, setLuckyNumber] = useState<number>(0);

  // define typing to use callback fn
  const addTwoHandler = useCallback(():void => setCount(prev => prev+2), []) // click handler - memoized, defined fn return type   

  // define typing for event param (e, event)
  const inputHandler = useCallback((e: ChangeEvent<HTMLInputElement>):void => {
    const newValue: number = parseInt(e.target.value) || 0;
    console.log(newValue)
    setLuckyNumber(newValue);
  }, []) // same + typing event param
  
  return <div> 
    <h1> UseCallbackHook </h1> <br/>
    {/* lucky number input field */}
    <label> enter your lucky number </label> <br/>
    <input type='number' value={luckyNumber} onChange={inputHandler}/>
    <h2> your lucky number is: {luckyNumber} </h2> <br/>
    {/* counter */}
    <h2> count {count} </h2>
    <button 
      // onClick={() => { setCount(prev => prev + 1) }} // inline click handler - not memoized, thus recreated on each render
      // onClick={addTwoHandler} 
      onClick={addTwoHandler}
    > + </button>
  </div>
}

export default UseCallbackHook