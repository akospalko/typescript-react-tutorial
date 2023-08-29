import {useState} from 'react'
import Counter from "./components/Counter"
import Headings from "./components/Headings"
import Section from "./components/Section"
import List from './components/List'

function App() {
  
  const [count, setCount] = useState(0);

  return (
    <>
      <Headings title={'Hello TS'} />
      <Section  > Section 1 children </Section>
      <Section title="Section 2 title" > Section 2 children </Section>
      <Counter setCount={setCount}> Counted {count} stars </Counter>
      <List 
        items={["🐵 monkey", "🐷 piggy", "🐞 lady beetle"]} 
        render={(item: string) => <span className='gold'> {item} </span>} 
      />
    </>
  )
}

export default App