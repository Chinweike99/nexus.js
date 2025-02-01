import Button from '@/components/Button/Button';
import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { items } from './data';

// Fetch data based on category
const getData = (cat) => {
  const data = items[cat];
  if (!data) {
    return notFound(); // Show 404 page if category doesn't exist
  }
  return data;
};

const Category = ({ params }) => {
  const data = getData(params.category);

  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((info, index) => (
        <div className={styles.item} key={index}>
          <div className={styles.content}>
            <h1 className={styles.title}>{info.title}</h1>
            <p className={styles.description}>{info.desc}</p>
            <Button text={'See More'} url={'#'} />
          </div>

          <div className={styles.imgContainer}>
            <Image
              src={info.image}
              fill={true}
              alt={info.title}
              className={styles.img}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;