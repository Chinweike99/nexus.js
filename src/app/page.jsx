import Image from "next/image";
import styles from "./page.module.css";
import { Habibi } from "next/font/google";
import Button from "@/components/Button/Button";






const habibi = Habibi({
  weight: "400",
  variable: "--font-habibi",
  subsets: ["latin"],
});


export default function Home() {
  return (
    <>
      <div className={`${styles.home} ${habibi.variable}`}>
          <div className={styles.item}>
            <h1 className={styles.title}>
              Enjoy every moment like it was your last. <br />Make each moment count
            </h1>
            <p className={styles.desc}>
              Bringing you futuristic ideas of the tech industry
            </p>
            <Button url={"/portfolio"} text={"Know better"}/>
          </div>


          <div className={styles.divWithBg}>
            </div>
      </div>
    </>
  );
}
