import styles from './Design.module.css';
import Rocket from '../../../assets/icons/Rocket_perspective_matte.png';
import Heart from '../../../assets/icons/Heart_rate_perspective_matte.png';
import Sucess from '../../../assets/icons/Success_perspective_matte.png';
import Tag from '../../../assets/icons/Code_perspective_matte.png';
import Security from '../../../assets/icons/Shield_perspective_matte.png';
import Lock from '../../../assets/icons/Padlock_perspective_matte.png';

export function Design() {
    return (
        <section className={styles.conatainer}>
            <header className={styles.header}>
                <div className={styles.tracejado}></div>
                <h2>Nossa Abordagem de design<br />e desenvolvimento</h2>
            </header>
            <main className={styles.main}>
                <div className={styles.leftContainer}>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <img src={Rocket} alt="foget" className={styles.foget} />
                        </div>
                        <div className={styles.informations}>
                            <h3>UX Driven Engineering</h3>
                            <p>Unlike other companies, we are a UX first development company.
                                Projects are driven by designers and they make sure design and
                                experiences translate to code.
                            </p>
                        </div>

                    </div>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <img src={Heart} alt="heart" className={styles.heart} />
                        </div>
                        <div className={styles.informations}>
                            <h3>Proven Experience and Expertise</h3>
                            <p>Unlike other companies, we are a UX first development company.
                                Projects are driven by designers and they make sure design and
                                experiences translate to code.
                            </p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <img src={Sucess} alt="task" className={styles.task} />
                        </div>
                        <div className={styles.informations}>
                            <h3>Code Reviews</h3>
                            <p>Unlike other companies, we are a UX first development company.
                                Projects are driven by designers and they make sure design and
                                experiences translate to code.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.rightContainer}>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <img src={Tag} alt="Tag" className={styles.Tag} />
                        </div>
                        <div className={styles.informations}>
                            <h3>Developing Shared Understanding</h3>
                            <p>Unlike other companies, we are a UX first development company.
                                Projects are driven by designers and they make sure design and
                                experiences translate to code.
                            </p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <img src={Security} alt="PadSecurity" className={styles.PadSecurity} />
                        </div>
                        <div className={styles.informations}>
                            <h3>Security & Intellectual Property (IP)</h3>
                            <p>Unlike other companies, we are a UX first development company.
                                Projects are driven by designers and they make sure design and
                                experiences translate to code.
                            </p>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <div className={styles.imageContainer}>
                            <img src={Lock} alt="Lock" className={styles.Lock} />
                        </div>
                        <div className={styles.informations}>
                            <h3>Quality Assurance & Testing</h3>
                            <p>Unlike other companies, we are a UX first development company.
                                Projects are driven by designers and they make sure design and
                                experiences translate to code.
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    )
}