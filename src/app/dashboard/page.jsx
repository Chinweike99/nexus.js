"use client";

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'
import useSWR from 'swr'

const Dashboard = () => {
  const [data, fetcData] = useState([])
  const [loading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   async function getData() {
  //     setIsLoading(true);
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/posts`, {cache: "no-store"});
    
  //     if (!response.ok) {
  //       return notFound();
  //     }
  //     const data = await response.json()
  //     fetcData(data);

  //     setIsLoading(false);
  //   }
  //   getData();
  // }, [])
  // console.log(data);

 
function Profile() {

  const fetcher = (...args) => fetch(...args).then(res => res.json());
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  // return <div>hello {data.name}!</div>

  console.log(data);
}

Profile();

  return (
    <div className={styles.dashboard}>
      ashbpord  
    </div>
  )
}

export default Dashboard