// experiment with useReducer hook: apply it to a counter component

import { ChangeEvent, ReactNode, useReducer,
  //  useState 
} from "react"
// SET UP REDUCER:
// #1 create state initializer
const initState = {count: 0, text: ''}

// #2 create reducer actions as enum 
// #2.1 define reducer action type string literals
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  TEXT_INPUT
}

// #2.2 define type for reducer action parameter
type reducerAction = {
  type: REDUCER_ACTION_TYPE,
  payload?: string
} 

// #3 create reducer function 
const reducer = (state: typeof initState, action: reducerAction): typeof initState => {
  switch(action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return {...state, count: state.count + 1}
    case REDUCER_ACTION_TYPE.DECREMENT:
      return {...state, count: state.count - 1}
    case REDUCER_ACTION_TYPE.TEXT_INPUT: 
      return {...state, text: action.payload ?? '' }  
    default: 
      throw new Error() 
  }
}

// SET UP COUNTER COMPONENT
// children type 
type ChildrenType = {
  children: (num: number) => ReactNode 
}
  
const Counter = ({children}: ChildrenType) => {
  
  // state
  // const [count, setCount] = useState<number>(1);
  
  // # 3 define reducer hook
  // reducer 
  const [state, dispatch] = useReducer(reducer, initState);

  // click handlers
  // handlers used with useState hook 
  // const increment = () => setCount(prev => prev + 1);
  // const decrement = () => setCount(prev => prev - 1);
  
  // handlers used with useReducer hook 
  // #4 create dispatch 
  const increment = () => dispatch({type:REDUCER_ACTION_TYPE.INCREMENT});
  const decrement = () => dispatch({type:REDUCER_ACTION_TYPE.DECREMENT});
  const textInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.TEXT_INPUT, 
      payload: e.target.value
    })
  }
  
  return(
    <>
      <h1>{children(state.count)}</h1>
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button> <br/>
      <input type='text' onChange={textInputHandler} value={state.text}/> <br/>
      <h2> Input text: {state.text} </h2>
    </>
  )
}

export default Counter
