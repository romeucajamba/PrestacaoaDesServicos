import styles from './Members.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Rcontent } from './content/Rcontent';
import { Dcontent } from './content/Dcontent';
import { Lcontent } from './content/Lcontent';
import { Ocontent } from './content/Ocontent';
import { Scontent } from './content/Scontent';
/////////////////////////Photos/////////////////////////////////////////
import RomeuPhoto from '../../../assets/images/Romeu.png';
import UserPhoto from '../../../assets/images/membersPhoto/Ellipse1.png';
import UserFoto from '../../../assets/images/membersPhoto/Group1.png';




export function Members() {
    return (
        <section className={styles.container}>
            <BrowserRouter>
                <header className={styles.header}>
                    <div className={styles.tracejado}></div>
                    <h3>Os membros da <br /><span>Yhanko</span></h3>
                </header>
                <main className={styles.content}>
                    <Routes>
                        <Route index element={<Rcontent />} />
                        <Route path='Dcontent' element={<Dcontent />} />
                        <Route path='Lcontent' element={<Lcontent />} />
                        <Route path='Ocontent' element={<Ocontent />} />
                        <Route path='Scontent' element={<Scontent />} />
                    </Routes>
                </main>
                <footer className={styles.footer}>
                    <nav className={styles.navigation}>
                        <Link to="./" className={styles.userPhotoContent}>
                            <img src={RomeuPhoto} alt="RomeuCajamba"
                                className={styles.userPhoto}
                            />
                            <span>Romeu Cajamba</span>
                        </Link>

                        <Link to="Dcontent" className={styles.userPhotoContent} >
                            <img src={UserPhoto} alt="DanioSolo"
                                className={styles.userPhoto}
                            />
                            <span>Danio Solo</span>
                        </Link>

                        <Link to="Lcontent" className={styles.userPhotoContent} >
                            <img src={UserFoto} alt="LourençoCardoso"
                                className={styles.userPhoto}
                            />
                            <span>Lourenço Cardoso</span>
                        </Link>

                        <Link to="Ocontent" className={styles.userPhotoContent}>
                            <img src={UserPhoto} alt="Osvaldo"
                                className={styles.userPhoto}
                            />
                            <span>Osvaldo</span>
                        </Link>

                        <Link to="Scontent" className={styles.userPhotoContent}>
                            <img src={UserFoto} alt="MilvanioSamuel"
                                className={styles.userPhoto}
                            />
                            <span>Milvanio Samuel</span>
                        </Link>

                    </nav>
                </footer>
            </BrowserRouter>
        </section>
    )
}