import React from 'react';
import styles from "./botao.module.scss"

export default function Button({text}) {
  return (
    <>
        <button className={styles.botao}>{text}</button>
    </>
  )
}
