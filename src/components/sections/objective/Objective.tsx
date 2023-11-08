import styles from './Objective.module.css';
import AboutUs from '../../../assets/images/Abou-us-Video.svg';


export function Objective() {
    return (
        <section className={styles.objectiveSession}>
            <div className={styles.ifoContainer}>
                <div className={styles.tracejadoUp}></div>
                <h1 className={styles.h2}>Qual é o nosso objetivo
                    <br />para contigo</h1>

                <p className={styles.p}><span>
                    Dar vida as suas ideias,</span> deixando tudo ao seu gosto,
                    tornando <br />mais profissional e criativo.
                </p>

                <p className={styles.information}><a>Mais informações</a></p>
            </div>
            <div className={styles.imgContainer}>
                <img className={styles.img}
                    src={AboutUs}
                    alt="vídeo explicativo sobre nossso objetivo"
                />
            </div>
            <div className={styles.tracejadoDown}></div>
            <div className={styles.ballon}></div>
        </section>
    )
}