import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

async function getData() {
  const response = await fetch("http://localhost:3000/api/posts", {cache: "no-store"});

  if (!response.ok) {
    throw new Error("COuld not fetch data");
  }

  return response.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={styles.blog}>
      Blog
      {
      data.map((post, index) => {
        return (
          <Link href={"/blog/posts"} className={styles.container} key={index}>
            <div className={styles.imageContainer}>
              <Image
                src={"/images/school.png"}
                alt="blog image"
                width={400}
                height={250}
                className={styles.image}
              />
            </div>

            <div>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.desc}> {post.content}</p>
            </div>
          </Link>
        );
      })}
      <Link href={"/blog/work"}>work</Link>
    </div>
  );
};

export default Blog;
