// Quick peek at TS generics and interfaces in react - render an array of items on the screen
import { ReactNode } from "react";

// Create generic interface
interface ListProps<T> {
  items: T[], // arr of items
  render: (item: T) => ReactNode // fn to render a list of items 
}

// Render arr of items
// const List = <T extends {}> ({items, render}: ListProps<T>) => { // NOTE: we must extend T for the component to be recoginzed 
const List = <T,>({items, render}: ListProps<T>) => {
  return (  
    <ul>
    {items.map((item, i) => (
      <li key={i}>
        {render(item)}
      </li>
    ))}
    </ul>
  )
}

export default List