import React from 'react'
import styles from './Alerta.module.css'

const Alerta = ({ mensaje }) => {
  return (
    <div className={ styles.alerta}>
        <h3>{ mensaje }</h3> 
   </div>
  )
}

export default Alerta