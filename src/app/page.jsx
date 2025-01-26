import Image from "next/image";
import styles from "./page.module.css";
import { assets } from "@/assets/assets.js";

export default function Home() {
  return (
    <>
      <div className={styles.home}>
          <div className={styles.item}>
            <h1 className={styles.title}>
              Don't be left out, be aware of the Digital Space.
            </h1>
            <p className={styles.desc}>
              Bringng you futuristic ideas of the tech industry
            </p>
            <button className={styles.button}>Know more</button>
          </div>


          <div className={styles.divWithBg}>
            </div>
      </div>
    </>
  );
}
