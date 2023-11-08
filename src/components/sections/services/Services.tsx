import styles from "./service.module.css";
import Mobile from '../../../assets/icons/Mobile_app_perspective_matte.png';
import Web from '../../../assets/icons/Code_perspective_matte.png';
import BD from '../../../assets/icons/Dashboard_perspective_matte.png';
import Pc from '../../../assets/icons/img-95.png';
import Desktop from '../../../assets/icons/freebie-16.png';


export function Services() {
    return (
        <section id="service" className={styles.section}>
            <h1>Nossos Serviços</h1>
            <div className={styles.services_container}>
                <div className={styles.services_data}>
                    <img src={Web} alt="Web" className={styles.icon} />
                    <h3 className={styles.webtitle}>Web</h3>
                    <p className={styles.services_title}>
                        Prontos para a criação do template e logo marcas, logotipos,
                        marcas e dar vida ao teu site,blog, portifolio, etc..
                    </p>
                </div>

                <div className={styles.services_data}>
                    <img src={Mobile} alt="Mobile" className={styles.icon} />
                    <h3 className={styles.mobile}>Mobile</h3>
                    <p className={styles.services_title}>
                        Criação de aplicativos androids e IOS com tecnologias
                        mais usadas e com melhor performance.
                    </p>
                </div>

                <div className={styles.services_data}>
                    <img src={BD} alt="database" className={styles.icon} />
                    <h3 className={styles.database}>Banco de Dados</h3>
                    <p className={styles.services_title}>
                        Criação e gerenciamento de banco de dados, de maneira eficaz.
                    </p>
                </div>

                <div className={styles.services_data}>
                    <img src={Pc} alt="design" className={styles.icon} />
                    <h3 className={styles.design}>UI/Ux</h3>
                    <p className={styles.services_title}>
                        Ofereçemos serviço de design de qualidade, criação
                        de logotipos, panfletos, lyouts, cartões de visita, anucions, etc.
                    </p>
                </div>

                <div className={styles.services_data}>
                    <img src={Desktop} alt="Desktop" className={styles.icon} />
                    <h3 className={styles.desktop}>Desktop</h3>
                    <p className={styles.services_title}>
                        Criação de aplicativos desktop com as tecnologias mais rapidas,
                        eficazes e recomendáveis do mercado.
                    </p>
                </div> 

            </div>
        </section >
    )
}