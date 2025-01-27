import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href='/portfolio/family' className={styles.item}>
          <span>Family</span>
        </Link>
        <Link href='/portfolio/school' className={styles.item}>
          <span>School</span>
        </Link>
        <Link href='/portfolio/travel' className={styles.item}>
          <span>Travel</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio