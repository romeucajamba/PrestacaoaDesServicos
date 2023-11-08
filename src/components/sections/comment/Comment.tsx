import styles from './Comment.module.css';
import Avatar from '../../../assets/images/Avatar.png';


export function Comment() {
    return (
        <section className={styles.container}>
            <div className={styles.imgContainer}>
                <img src={Avatar} alt="pepleoCommenting" className={styles.imgAvatar} />
            </div>
            <div className={styles.loginContainer}>
                <h3>O que achou dos <span>nossos serviços?</span></h3>
                <p>Vê o que outras pessoas disseram e
                    podes dar o teu feedback.
                </p>
                <button type="button" className={styles.buttonComment}>Comentar</button>
            </div>
        </section>
    )
}