import styles from './Section.module.css';
import svgGraphic from '../../assets/images/graphic.svg';

export function Ferstsection() {

    return (
        <section className={styles.onSection}>
            <div>
                <h1 className={styles.h1}>A <span>solução</span> para
                    <br /> os seus <span id='span'> projetos</span></h1>

                <p className={styles.p}>A apexiom.Code vem ajudar o seu projeto, tanto no seu</p>
                <p className={styles.p}> crescimento, na sua funcionalidade, na sua expanção.</p>

                <button className={styles.button}
                    type='submit'
                >
                    Let’s get started!
                </button>
            </div>
            <div>
                <img src={svgGraphic} alt="Sobre nós" />
            </div>
            <div className={styles.bola}></div>
        </section>
    )
}