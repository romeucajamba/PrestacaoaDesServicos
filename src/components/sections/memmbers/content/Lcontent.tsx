import styles from './Content.module.css';
import Virgula from '../../../../assets/icons/virgula.png';
import Vetor from '../../../../assets/icons/Vector.png';

export function Lcontent() {
    return (
        <div>
            <img src={Virgula} alt="couman" className={styles.coumanUp} />
            <p className={styles.contentDev}>
                Olá eu sou o Lourenço Cardoso, Desenvolvedor Front-end e Designer.
                <br />ksdjsdjksdjksdkjksdsdsdjksdjksjkjkdhhjsdhjsdhjsdhjdhjdhjhjjjkkkk
                dhjdhjdhjhjdhjdsdjsdjssjsjdhsdhjhjhjhjdsdjkjksdjksdjksdjksdjksdj
                ksdjksdjksdjksshjhjsdhjsdsdjsdjksdjksdjksdjsdjksdjksdjsdjsdjk
            </p>
            <img src={Vetor} alt="couman" className={styles.coumanDown} />
        </div>
    )
}