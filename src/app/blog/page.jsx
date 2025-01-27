import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.blog}>
      Blog
      <Link href={'/blog/posts'} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={'/images/school.png'} alt='blog image' width={400} height={250} className={styles.image}/>
        </div>

        <div>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}> Description</p>
        </div>

      </Link>

      <Link href={'/blog/posts'} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={'/images/school.png'} alt='blog image' width={400} height={250} className={styles.image}/>
        </div>

        <div>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}> Description</p>
        </div>

      </Link>

      <Link href={'/blog/posts'} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={'/images/school.png'} alt='blog image' width={400} height={250} className={styles.image}/>
        </div>

        <div>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}> Description</p>
        </div>

      </Link>



      <Link href={'/blog/work'} >
        work
      </Link>
    </div>
  )
}

export default Blog