
import PROJECTS from "@/data/projects"
import WORK_HISTORY from "@/data/work"

export default function Home() {
  return (<div className="container">
    <section className="hero">
      <h1>Dave Paul</h1>
      <p>Sed ut sollicitudin massa. Nullam in pellentesque neque.</p> 
    </section>
    <section>
      <h2>Projects</h2> 
      {PROJECTS.map(({title,id,description}) => {
        return (<div key={id}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>)
    })}
    </section>
    <section>
      <h2>Work Experience</h2>
      {WORK_HISTORY.map(({name,location,roles},c) => {
        return (<div key={c}>
          <h3>{name} <span>{location}</span></h3>
          
          {roles.map(({title,startDate,endDate,achievements},r) => {
          return (<div key={r}>
            <h4>{title} <span>{startDate} - {endDate}</span></h4>
            <ul>
              {achievements.map((text,a) => {
                return <li key={a}>{text}</li>
              })}
            </ul>
          </div>)
        })}
        </div>)
      })}
    </section>
    <section>
      <h2>Get In Touch</h2>
      <p>I'm always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, feel free to reach out.</p>
      <p>Email: peng.bits@gmail.com</p>
      <p>LinkedIn: <a href="https://linkedin.com/in/davepaul">linkedin.com/in/davepaul</a></p>
      <p>Github: <a href="https://github.com/pengbits">pengbits</a></p>
    </section>
  </div>
  )
}
