import React, { createContext, useContext, useReducer, useCallback, ChangeEvent, ReactElement } from "react";

// SET UP REDUCER:
// #1 create state initializer
// #1.1 state initializer type
type StateType = {
  count: number;
  text: string;
}
// #1.2 state init declaration
export const initState: StateType = {count: 0, text: ''}

// #2 create reducer actions as enum 
// #2.1 reducer action strings for action type (enum)  
const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  TEXT_INPUT
}
// #2.2 reducer action type definition
type ReducerAction = {
  type: REDUCER_ACTION_TYPE,
  payload?: string
} 

// #3 create reducer function 
const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch(action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return {...state, count: state.count + 1}
    case REDUCER_ACTION_TYPE.DECREMENT:
      return {...state, count: state.count - 1}
    case REDUCER_ACTION_TYPE.TEXT_INPUT: 
      return {...state, text: action.payload ?? ''}  
    default: 
      throw new Error() 
  }
}     

// SET UP CUSTOM HOOK TO MANAGE CONTEXT (define reducer/state, handlers)
// #1 create custom hook
const useCounterContext = (initState: StateType) => {
  // #2 useReducer hook 
  const [state, dispatch] = useReducer(reducer, initState);

  // #3 memoized funciton dispatch 
  const increment = useCallback(() => dispatch({type:REDUCER_ACTION_TYPE.INCREMENT}), []);
  const decrement = useCallback(() => dispatch({type:REDUCER_ACTION_TYPE.DECREMENT}),[]);
  const textInputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.TEXT_INPUT, 
      payload: e.target.value
    })
  },[])

  return {state, increment, decrement, textInputHandler}
}

// CREATE CONTEXT
//#1 context type
type UseCounterContextType = ReturnType<typeof useCounterContext> 
//2# context state initialier 
const initContextState: UseCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  textInputHandler: (e: ChangeEvent<HTMLInputElement>) => {},
}
//#3 create context 
export const CounterContext = createContext<UseCounterContextType>(initContextState)

// CONTEXT PROVIDER COMPONENT 
// #1 component children type
type ChildrenType = {
  children?: ReactElement | undefined
}
// #2 context provider component 
export const CounterProvider = ({
  children, ...initState
}: ChildrenType & StateType ): ReactElement => {
   
  return (
    // #3 provider wrapper
    <CounterContext.Provider
      // initialize context values  
      value={useCounterContext(initState)}
    >
      {children}
    </CounterContext.Provider>
  )
}

// CONSUMED CONTEXT - CUSTOM HOOK
// #1.1 type for counter related logic
type UseCounterHookType = {
  count: number, 
  increment: () => void,
  decrement: () => void
}

// #2.1 define consumed context - counter  
export const useCounter = (): UseCounterHookType => {
  const {state: {count}, increment, decrement} = useContext(CounterContext);

  return {count, increment, decrement}
}
 
// #1.2 type for input field  
type UseCounterTextHookType = {
  text: string,
  textInputHandler: (e: ChangeEvent<HTMLInputElement>) => void,
}

// #2.2 define consumed context - input field   
export const useCounterText = (): UseCounterTextHookType => {
  const {state: {text}, textInputHandler} = useContext(CounterContext);

  return {text, textInputHandler }
}