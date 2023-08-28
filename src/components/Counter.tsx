// Showcase: create/type useState hook, passing down props, create types for props

// import {useState} from 'react'

// // #1 Self contained version, with its own state
// const Counter = () => {
//   const [count, setCount] = useState<number | null | undefined>(1); // 
//   // const [count, setCount] = useState<number | null | undefined>(); // if initial state value is nullish  

//   return (
//     <>
//       <h1> Counter: {count} </h1>
//       <button onClick={() => setCount(prevCount => (prevCount ?? 0) + 1)}> + </button>
//       {/* !NOTE: (prevCount ?? 0) -> handle intiial state value: null */}
//       <button onClick={() => setCount(prevCount => (prevCount ?? 0) - 1)}> - </button>
//     </>
//   )
// }

// export default Counter


import {ReactNode} from 'react'

// #2 Lifted state - pass props from parent component
// define prop types
type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>,
  children: ReactNode
}

const Counter = ({setCount, children}: CounterProps) => {
  return (
    <>
      <h1>{children}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}> + </button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}> - </button>
    </>
  )
}

export default Counter
