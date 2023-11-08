import styles from './Project.module.css'
import LeftRow from '../../../assets/icons/Deco-img-arrow.png';
import RightRow from '../../../assets/icons/Deco-img-arrow1.png';
import MobileFirst from '../../../assets/images/Case-study__image.png';
import MobileSeconde from '../../../assets/images/Case-study__image1.png';
import MobileFird from '../../../assets/images/Case-study__image2.png';



export function Project() {
    return (
        <section className={styles.Project}>
            <header className={styles.header}>
                <img src={LeftRow} alt="row" className={styles.leftRow} />
                <img src={RightRow} alt="row" className={styles.rightRow} />
                <div className={styles.ballon}></div>
                <div className={styles.tracejado}></div>
                <h3 className={styles.title}>
                    Nossos projetos mais <br />recentes
                </h3>
            </header>
            <div className={styles.conatiner}>
                <div className={styles.firstConatainer}>
                    <div className={styles.imgContainer}>
                        <img src={MobileFirst} alt="project" className={styles.imgstyle} />
                    </div>
                    <div className={styles.paragraphConatainerFirst}>
                        <h4>Website Design for SCFC Canada</h4>
                        <p>
                            Born out of a vision, a single-minded objective that puts service before <br />anything else,
                            Swift Clearance and Forwarding Corp. surging forth to <br />deliver the best services in the
                            shipping and logistics scenario.  <br />Itsmeteoric rise stems out of a solid foundation. The
                            management boasts of <br />over20 years of rich and varied experience in the shipping and freight
                            forwarding industry.
                        </p>
                    </div>
                </div>

                <div className={styles.secondConatainer}>
                    <div className={styles.imgContainer}>
                        <img src={MobileSeconde} alt="Project" className={styles.imgstyle} />
                    </div>
                    <div className={styles.paragraphConatainerSecond}>
                        <h4>Website Design for SCFC Canada</h4>
                        <p>
                            Born out of a vision, a single-minded objective that puts service before <br />anything else,
                            Swift Clearance and Forwarding Corp. surging forth to <br />deliver the best services in the
                            shipping and logistics scenario. Its <br />meteoric rise stems out of a solid foundation. The
                            management boasts of <br />over20 years of rich and varied experience in the shipping and freight
                            forwarding industry.
                        </p>
                    </div>
                </div>

                <div className={styles.lastConatainer}>
                    <div className={styles.imgContainer}>
                        <img src={MobileFird} alt="Project" className={styles.imgstyle} />
                    </div>
                    <div className={styles.paragraphConatainerLast}>
                        <h4>Website Design for SCFC Canada</h4>
                        <p>
                            Born out of a vision, a single-minded objective that puts service before <br />anything else,
                            Swift Clearance and Forwarding Corp. surging forth to <br />deliver the best services in the
                            shipping and logistics scenario. Its <br />meteoric rise stems out of a solid foundation. The
                            management boasts of <br />over20 years of rich and varied experience in the shipping and freight
                            forwarding industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}