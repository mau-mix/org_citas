import React from 'react'
import styles from './Header.module.css'

const Header = ({ titulo }) => {
  return (
    <div>
       <h1 className={ styles.titulo }>{ titulo }</h1> 
    </div>
  )
}

export default Header
