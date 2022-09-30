import Image from "next/image"
import styles from "../styles/Footer.module.css"
export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" layout="fill" alt="" />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DID. <br/>CAKES N’ SPRINKLES, WELL BAKED PIECE OF CAKE.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR ORDERS</h1>
          <p className={styles.text}>
            178.
            <br /> OLD GAMPOLA ROAD, PERADENIYA
            <br /> 0777 599 599
          </p>
          <p className={styles.text}>
            333.
            <br /> JAYAMALAPURA ROAD, GAMPOLA
            <br /> 0777 191 191
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer;