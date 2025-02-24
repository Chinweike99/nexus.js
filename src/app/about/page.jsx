import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import aboutpage from '../../../public/images/aboutpage.png'
import Button from '@/components/Button/Button'
import { Habibi } from "next/font/google";



const habibi = Habibi({
  weight: "400",
  variable: "--font-habibi",
  subsets: ["latin"],
});



const About = () => {
  return (
    <div className={`${styles.aboutPage} ${habibi.variable}`}>
      <div  className={styles.imageContainer}>
        <Image src={aboutpage} alt='about page' fill={true}
        className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Keep your memories safe</h1>
          <h2 className={styles.imgDesc}>Digital memory store, for every one make</h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we ?</h1>
          <p className={styles.desc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          </p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What we do</h1>
          <p className={styles.desc}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur,
          </p>

          <Button url={"contact"} text={"contact us"}/>
        </div>
      </div>
    </div>
  )
}

export default About