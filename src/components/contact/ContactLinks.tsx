import { VisuallyHidden } from "@chakra-ui/react"
import styles from "./ContactLinks.module.css"
import contact_data from "@/data/contact"

export const ContactLinks = () => (<ul className={styles['contact-links']}>
  {contact_data.platforms.map(p => {
    return (
      <li 
        className={styles[p.platform]}
        key={p.platform} 
        aria-label={p.platform}>
          <a href={`${p.baseUrl}${p.handle}`}>
            <VisuallyHidden>{p.handle}</VisuallyHidden>
          </a>
      </li>
    )
  })}
</ul>)