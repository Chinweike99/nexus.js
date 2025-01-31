"use client";

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'

const Dashboard = () => {
  const [data, fetcData] = useState([])
  const [loading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {cache: "no-store"});
    
      if (!response.ok) {
        return notFound();
      }
      const data = await response.json()
      fetcData(data);

      setIsLoading(false);
    }
    getData();
  }, [])


  console.log(data);

  return (
    <div className={styles.dashboard}>
      ashbpord  
    </div>
  )
}

export default Dashboard