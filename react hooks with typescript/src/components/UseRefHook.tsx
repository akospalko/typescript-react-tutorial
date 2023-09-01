import {useEffect, useRef} from 'react'

const useRefHook = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  console.log(buttonRef?.current)
  console.log(buttonRef?.current?.value)

  useEffect(() => {
    console.log('focusing button on component mount')

    if(buttonRef.current) {
      buttonRef.current.focus();
    }
    

  },[])

  return (
    <>
      <h1>useRefHook</h1>
      <h2> focusing button when component mounts </h2>
      <button ref={buttonRef}> Focused Btn </button>  
    </>
  )
}

export default useRefHook