import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import contactUs from '../../../public/images/contactUs.png'
import Button from '@/components/Button/Button'

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Keep in touch with us</h1>
      <div className={styles.content}>

        <form className={styles.form}>
          <input type='text' placeholder='name' className={styles.input}/>
          <input type='text' placeholder='email' className={styles.input}/>
          <textarea className={styles.textarea} cols={'30'} rows={"10"} placeholder='Enter your message' ></textarea>

          <Button url={"#"} text={"Send"} />
        </form>

        <div className={styles.imgContainer}>
          <Image src={contactUs}  alt='contact' fill={true} className={styles.image}/>
        </div>
      </div>
    </div>
  )
}

export default Contact