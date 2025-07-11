import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

/* This is the main page of the NFT Card application
It displays a card with an image, title, description, stats, and footer
The card is styled using CSS modules and includes responsive design elements */
export default function Home() {
  return (
    <>
    <Head>
      <title>NFT-Card | Frontend Mentor</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon-32x32.png" />
    </Head>
    <main className={`${styles.main}`}>
      <div className={styles.card}>

        <div className={styles.imageContainer}>
          <Image
            src="/image-equilibrium.jpg"
            alt="Equilibrium Image"
            width={300}
            height={300}
            className={styles.image}
            />

          <div className={styles.viewOverlay}>
            <Image
              src={"/icon-view.svg"}
              alt="View Icon"
              width={20}
              height={20}
              quality={100}
              priority // Ensures the icon is loaded immediately
              className={styles.viewIcon}
              />
          </div>
        </div>

        <h1 className={styles.title}>Equilibrium #3429</h1>

        <p className={styles.description}>
          Our Equilibrium collection promotes balance and calm.
        </p>

        <div className={styles.stats}>
          <div className={styles.price}>
            <Image
              src="/icon-ethereum.svg"
              alt="Ethereum Icon"
              width={12}
              height={20}
              />
            <span>0.041 ETH</span>
          </div>

          <div className={styles.timeLeft}>
            <Image
              src="/icon-clock.svg"
              alt="Clock Icon"
              width={20}
              height={20}
              />
            <span>3 days left</span>
          </div>
        </div>

        <div className={styles.divider}></div>
        
        <div className={styles.footer}>
          <Image
            src="/image-avatar.png"
            alt="Avatar Image"
            width={40}
            height={40}
            className={styles.avatar}
          />

          <span>Creation of <strong>Jules Wyvern</strong></span>
        </div>
      </div>
    </main>
    </>
  );
}