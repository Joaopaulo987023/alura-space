import React, { useState } from 'react'
import Tags from '../Tags'
import fotos from './fotos.json'
import styles from './Galeria.module.scss'

import Cards from './Cards'
export default function Galeria() {
  const[itens,setItens]=useState(fotos);
  const tags = ["todos",...new Set(fotos.map((valor)=>valor.tag))]
  
 
  const filtered = (tag)=>{
    if(tag==="todos"){
      return setItens(fotos)
    }
    const itemFiltered = fotos.filter((foto)=>foto.tag===tag)
    setItens(itemFiltered)
       
  
  }
  return (
    <section className={styles.galeria} >
      <h2>Navegue pela galeria</h2>
      <Tags  filtered={filtered} tags={tags}/>
      <Cards itens={itens} styles={styles}/>
    </section>
  )
}
