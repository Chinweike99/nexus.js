import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const BlogPost = ({params}) => {
  console.log(params)
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.infoContainer}>
            <h1 className={styles.title}>Keeping memories alive like it was yesterday
            </h1>

            <p className={styles.desc}> 
              decription
            </p>
            <div className={styles.author}>
              <Image 
              src={'/images/students1.png'}
              alt='blog image'
              width={50}
              height={50}
              className={styles.avatar2}
              />
              <span className={styles.username}>Joseph Caleb</span>
            </div>
          </div>
          <Image 
              src={'/images/students1.png'}
              alt='blog image'
              width={450}
              height={300}
              className={styles.avatar}
              />
        </div>

        <div>
          <p className={styles.majorContent}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
        </div>
      </div>
    </div>
  )
}

export default BlogPost