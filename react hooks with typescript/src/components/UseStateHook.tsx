import {useState} from 'react'

const UseStateHook = () => {
  // Interfaces
  // arr of users
  interface Users {
    id: string,
    name: string
  }

  const [count, setCount] = useState(0) // implicit typing
  const [count1, setCount1] = useState<number>(0) // explicit type (number) 
  const [count2, setCount2] = useState<number | null>(null) // number/null union - state is later initialized with data (e.g. fetch) 
  const [users, setUsers] = useState<Users[] | null>(null) // users arr with Users interface - uninitialized state 

  return (
    <div>
      UseStateHook <br/>
    </div>
  )
}

export default UseStateHook