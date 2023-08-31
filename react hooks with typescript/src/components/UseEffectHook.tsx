import {useState, useEffect} from 'react'

/* Note:
- ue does not require any specific types

- ue behavior with strict mode on:
  1. component mounts // log mounting
  2. component unmount // log unmounting
  3. component remount // log mounting
*/

const UseEffectHook = () => {
  // Interfaces
  // arr of users
  interface Users {
    id: string,
    name: string
  }

  const [users] = useState<Users[] | null>(null) 

  useEffect(() => {
    console.log('mounting') 
    // console.log(users)
    return () => {console.log('unmounting')}
  }, [users])

  return (
    <>
      <div> UseEffectHook </div> <br/>
    </>
  )

}

export default UseEffectHook