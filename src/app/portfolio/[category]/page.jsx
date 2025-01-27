import Button from '@/components/Button/Button'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const Category = ({params}) => {
  console.log(params)
  return (
    <div className={styles.imgContainer}>
        <h1 className={styles.category}>{params.category}</h1>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Testing</h1>
            <p className={styles.description}>Description</p>

            <Button text={"see more"} url={"#"}/>
          </div>

          <div className={styles.imgContainer}>
            <Image src={'/images/family1.png'} 
            fill={true}
            alt='image'

            className={styles.Button}
            />
          </div>
          
        </div>
        <div className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>Testing</h1>
            <p className={styles.description}>Description</p>

            <Button text={"see more"} url={"#"}/>
          </div>

          <div className={styles.imgContainer}>
            <Image src={'/images/family1.png'} 
            fill={true}
            alt='image'

            className={styles.Button}
            />
          </div>
        </div>
    </div>
  )
}

export default Category