"use client"

import React, { useContext } from 'react'
import styles from './darkmode.module.css'
import { ThemeContext } from '../../../Context/ThemeContext'


const Darkmode = () => {
  const {toggle, mode} = useContext(ThemeContext)

  return (
    <div className={styles.container}>
        <button className={styles.sun} onClick={toggle}>🌙</button>
        {/* <div>☀️</div> */}
    </div>
  )
}

export default Darkmode