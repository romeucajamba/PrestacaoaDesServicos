import styles from './Frontend.module.css';
import { FaHtml5 } from 'react-icons/fa';
import { FaReact } from 'react-icons/fa';
import { FaCss3 } from 'react-icons/fa';

export function Frontend() {
    return (
        <div className={styles.imageContainer}>
            <FaReact className={styles.imageContent} />
            <FaHtml5 className={styles.imageContent} />
            <FaCss3 className={styles.imageContent} />
       
        </div>
    )
}