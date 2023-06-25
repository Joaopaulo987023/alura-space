import React from 'react'
import fotosPopulares from './fotos-polupares.json'
import styles from './Polulares.module.scss'
import Botao from 'componentes/Botao/Botao'
export default function Populares() {
  return (
    <aside className={styles.populares}>
        <h2>Populares</h2>
    <ul className={styles.populares__imagens}>
        {fotosPopulares.map((fotoPopular)=>{
            return(
                <li key={fotoPopular.id}> <img src={fotoPopular.path} alt={fotoPopular.alt} /></li>
            )
        })}
    </ul>
    <Botao text={'Ver mais'}/>
    </aside>
  )
}
