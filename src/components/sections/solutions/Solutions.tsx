import styles from './Solutions.module.css';
import EmployeesPeacture from '../../../assets/images/Romeu.png';
import SolutionsPhoto from '../../../assets/images/solutions.png';
import Programmer from '../../../assets/images/Programmer.png';
import Team from '../../../assets/images/Team.png';



export function Solutions() {
    return (

        <section className={styles.conatiner}>
            <header className={styles.header}>
                <div className={styles.tracejadoUp}></div>
                <h1 className={styles.h1}>Como iremos
                    <br />solucionar o seu projeto
                </h1>
            </header>

            <div className={styles.firstConatiner}>
                <div className={styles.firsParagraph}>
                    <h2 className={styles.about}>Compreender a sua ideia</h2>
                    <p className={styles.understand}>
                        Compreender da melhor maneira, por meio de mapas
                        <br />mentais, descrição de cada elemento visual do seu projeto.
                    </p>
                    <p className={styles.idea}>
                        <span>As suas ideias</span> serão compreendidas,
                        e levadas à <br />transformação em cada fase.
                    </p>
                    <div className={styles.border}></div>
                    <p className={styles.comment}>
                        "Simform is quick to identify larger problem with the
                        <br />Software so we decided to expand our scope to build
                        <br />new modules"
                    </p>
                    <div className={styles.commentaryArea}>
                        <img
                            src={EmployeesPeacture}
                            alt="Employees commentary"
                            className={styles.phorograph} />
                        <div className={styles.author}>
                            <p>Romeu Cajamba</p>
                            <p className={styles.developer}>Developer</p>
                        </div>

                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.ballonOrange}></div>
                    <div className={styles.ballonRose} ></div>
                    <img
                        src={SolutionsPhoto} alt="mapamental"
                        className={styles.solutionsPhoto}
                    />
                </div>
            </div>

            <div className={styles.secondContainer}>
                <div className={styles.secondImgContainer}>
                    <div className={styles.ballonRoseSecond} ></div>
                    <div className={styles.ballonOrangeSecond}></div>
                    <img
                        src={Programmer} alt="Programmer"
                        className={styles.programmerPhoto}
                    />
                </div>
                <div className={styles.secondParagraph}>
                    <h2 className={styles.becomeReal}>Tornando a sua ideia real</h2>
                    <p className={styles.teamWork}>Trabalhando em equipa para
                        tornar a sua ideia real, com
                        <br />dedicados e amantes do seu trabalho.
                    </p>
                    <p className={styles.objective}>
                        <span>Por meio de codigos</span>,
                        logicas e transformações iremos <br />fazer do seu um
                        objeto do mundo real.
                    </p>
                    <div className={styles.borderRight}></div>
                    <p className={styles.commentRight}>
                        "Simform is quick to identify larger problem with the
                        <br />Software so we decided to expand our scope to build
                        <br />new modules"
                    </p>
                    <div className={styles.commentaryAreaRight}>
                        <img
                            src={EmployeesPeacture}
                            alt="Employees commentary"
                            className={styles.phorographRight}
                        />
                        <div className={styles.authorRight}>
                            <p>Romeu Cajamba</p>
                            <p className={styles.developerRight}>Developer</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.firdConatiner}>
                <div className={styles.firdParagraph}>
                    <h2 className={styles.aboutDown}>Trabalhando em equipa</h2>
                    <p className={styles.understandDown}>
                        Trabalhando em equipa lado a lado, de forma eficiente, dando suporte
                        <br />uns aos outros, solucionando problemas e tornaando o
                        <br /> trabalhando mais eficiente e ágil.
                    </p>
                    <p className={styles.ideaDown}>
                        <span>Variação de lógica</span>, e junção de ideias irá tornar a sua
                        <br /> ideia num projeto mais eficiente.
                    </p>
                    <div className={styles.borderDown}></div>
                    <p className={styles.commentDown}>
                        "Simform is quick to identify larger problem with the
                        <br />Software so we decided to expand our scope to build
                        <br />new modules"
                    </p>
                    <div className={styles.commentaryAreaDown}>
                        <img
                            src={EmployeesPeacture}
                            alt="Employees commentary"
                            className={styles.phorographDown} />
                        <div className={styles.authorDown}>
                            <p>Romeu Cajamba</p>
                            <p className={styles.developerDown}>Developer</p>
                        </div>

                    </div>
                </div>
                <div className={styles.firdImgConatiner}>
                    <div className={styles.ballonRoseDown}></div>
                    <div className={styles.ballonOrangeDown} ></div>
                    <img
                        src={Team} alt="TeamLearnig"
                        className={styles.team}
                    />
                </div>
            </div>

        </section>

    )
}