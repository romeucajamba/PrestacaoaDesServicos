import styles from './Database.module.css';
import Mysql from '../../../../../assets/icons/mysql.png';
import MongoDB from '../../../../../assets/icons/momongo.png';

export function Database() {
    return (
        <div className={styles.imageContainer}>
            <img src={Mysql} alt="Mysql" className={styles.mysqlImage} />
            <img src={MongoDB} alt="MongoDB" className={styles.mongoImage} />
        </div>
    )
}