import UseCallbackHook from "./components/UseCallbackHook"
import UseEffectHook from "./components/UseEffectHook"
import UseMemoHook from "./components/UseMemoHook"
import UseStateHook from "./components/UseStateHook"

function App() {

  return (
    <>
      <h1> Welcome to react hooks and typescript </h1>
      <UseStateHook/>
      <UseEffectHook/>
      <UseCallbackHook/>
      <UseMemoHook/>
    </>
  )
}

export default App