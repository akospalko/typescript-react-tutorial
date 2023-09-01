// explore use memo hook with ts

/* Note:
- use memo is used to store a value that would be resource intensive to recalculate on each render
- a good example would be the fibonacci sqeuence
*/

import{
  useMemo
} from 'react'

const UseMemoHook = () => {

  type fibonacciType = (num: number) => number
  const myNum = 6

  const calcFib: fibonacciType = (num) => {
    if(num < 2) return num
    return calcFib(num - 1) + calcFib(num - 2);
  }
  
  const fibResult = useMemo<number>(() => calcFib(myNum), [myNum])
  
  return <div> 
    <h1> UseMemoHook </h1> <br/>
    <h2> calculated fibonacci sequence: </h2>
    <p> provided value: {myNum} </p>
    <p> calculated fib: {fibResult} </p>
  </div>
}

export default UseMemoHook