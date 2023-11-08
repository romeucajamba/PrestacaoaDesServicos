import styles from './Mobile.module.css';
import Java from '../../../../../assets/icons/Java.png';

export function Mobile() {
    return (
        <div className={styles.imageContainer}>
            <img src={Java} alt="Back-end" className={styles.imageContent} />
        </div>
    )
}