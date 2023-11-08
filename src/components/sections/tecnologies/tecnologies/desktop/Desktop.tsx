import styles from './Desktop.module.css';
import Net from '../../../../../assets/icons/NETCore.png';

export function Desktop() {
    return (
        <div className={styles.imageContainer}>
            <img src={Net} alt="Back-end" className={styles.imageContent} />
        </div>
    )
}