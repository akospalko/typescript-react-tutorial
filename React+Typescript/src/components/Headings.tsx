type HeadingProps = {
  title: string
} 

const Headings = ({title}:HeadingProps) => {
  return (
    <h1>
      {title} 
    </h1>
  )
}

export default Headings