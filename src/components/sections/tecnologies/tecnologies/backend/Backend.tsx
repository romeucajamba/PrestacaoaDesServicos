import styles from './Backend.module.css';
import Frame from '../../../../../assets//images/Frame 67.png';

export function Backend() {
    return (
        <div className={styles.imageContainer}>
            <img src={Frame} alt="Back-end" className={styles.imageContent} />
        </div>
    )
}