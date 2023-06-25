import React from 'react'
import styles from "./Tags.module.scss"
export default function Tags({tags, filtered}) {
    
  return (
    <div className={styles.tags}>
        <p>
            Filtre as Tags
        </p>
        <ul className={styles.tags__lista}>
            {tags.map((tag)=>{
              return <li key={tag} onClick={()=>filtered(tag)}>{tag}</li>
          })}
          
        </ul>
    </div>
  )
}
