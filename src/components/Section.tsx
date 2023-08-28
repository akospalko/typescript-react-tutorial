
// // Old way (pre react 18) of defining react components
// export const Section: React.FC<{title:string}> = ({title}) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//     </section>
//   )
// }

import { ReactNode } from "react"

// Old way (pre react 18) of defining react components
// export const Section: React.FC<{title:string}> = ({title}) => {
//   return (
//     <section>
//       <h2>{title}</h2>
//     </section>
//   )
// }

// New way (pre react 18) of defining react components:
// define prop types
type SectionProps = {
  title?: string,
  children: ReactNode // 
}

const Section = ({children, title="Section default title"}: SectionProps) => {
  return(
    <section>
      <h2> {title} </h2>
      <p> {children} </p>
    </section>
  )
}

export default Section