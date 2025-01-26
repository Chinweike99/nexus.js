import React from 'react';
import styles from './footer.module.css'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div >chinweike 2025</div>
        <div>
          <Image src={''} />
        </div>
    </div>
  )
}

export default Footer