import styles from "../styles/CakeCard.module.css"
import Image from "next/image";

const CakeCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/cake.png" alt="" width="500" height="500" />
            <h1 className={styles.title}>Chocolate Chip brownie</h1>
            <span className={styles.price}>RS 135.00</span>
            <p className={styles.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
    )
}

export default CakeCard;