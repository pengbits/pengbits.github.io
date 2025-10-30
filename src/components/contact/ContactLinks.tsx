import { VisuallyHidden } from "@chakra-ui/react"
import styles from "./ContactLinks.module.css"
import contact_data from "@/data/contact"

const pretty = (handle:string) => (
  handle.replace('-',' ').toLowerCase()
)

export const ContactLinks = () => (<ul className={styles['contact-links']}>
  {contact_data.platforms.map(p => {
    return (
      <li 
        className={styles[p.platform]}
        key={p.platform} 
        aria-label={p.platform}>
          <a href={`${p.baseUrl}${p.handle}`}>
            <i>
              <VisuallyHidden>{p.handle}</VisuallyHidden>
            </i>
            <span className={styles['label']}>
              <strong>
                {p.platform}</strong>{': '}
                {pretty(p.handle)}
              </span> 
          </a>
      </li>
      
    )
  })}
</ul>)