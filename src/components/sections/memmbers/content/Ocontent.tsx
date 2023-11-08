import styles from './Content.module.css';
import Virgula from '../../../../assets/icons/virgula.png';
import Vetor from '../../../../assets/icons/Vector.png';


export function Ocontent() {
    return (
        <div>
            <img src={Virgula} alt="couman" className={styles.coumanUp} />
            <p className={styles.contentDev}>
                Olá eu sou o Osvaldo, Desenvolvedor Back-end.
                <br />ksdjsdjksdjksdkjksdsdsdjksdjksjkjkdhhjsdhjsdhjsdhjdhjdhjhjjjkkkk
                dhjdhjdhjhjdhjdsdjsdjssjsjdhsdhjhjhjhjdsdjkjksdjksdjksdjksdjksdj
                ksdjksdjksdjksshjhjsdhjsdsdjsdjksdjksdjksdjsdjksdjksdjsdjsdjk
            </p>
            <img src={Vetor} alt="couman" className={styles.coumanDown} />
        </div>
    )
}