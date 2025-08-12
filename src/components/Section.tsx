type SectionProps = {
  title:String,
  body:String
}
export const Section = ({title,body}:SectionProps) => {
  return (<section>
    <h3>{title}</h3>
    <p>{body}</p>
  </section>)
}