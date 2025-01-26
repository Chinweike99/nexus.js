"use client";

import Link from "next/link";
import React from "react";
import styles from './page.module.css'

const Navbar = () => {
  const navBar = [
    { id: 6, name: "Home", url: "/" },
    { id: 1, name: "Portfolio", url: "/portfolio" },
    { id: 2, name: "Blog", url: "/blog" },
    { id: 3, name: "About", url: "/about" },
    { id: 4, name: "Contact", url: "/contact" },
    { id: 5, name: "Dashboard", url: "/dashboard" },
  ];


  console.log("this is the navbar ..")

  return (
    <>
      <div className={styles.container}>
        <Link href={'/'} className={styles.logo}>nexus</Link>
        <div className={styles.navItems}>
          {navBar.map((clicks) => {
            return (
              <div key={clicks.id} >
                <Link href={clicks.url} className={styles.links}>
                  {clicks.name}
                </Link>
              </div>
            );
          })}
          <button onClick={(()=>{console.log("You are logged out")})}className={styles.logout}>
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
