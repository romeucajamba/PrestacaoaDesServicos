import { AboutUs } from '../sections/about/AboutUs';
import { CreateProject } from '../sections/create_project/CreateProject';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Project } from '../sections/project/Project';
import styles from './Header.module.css';



export function Header() {
    return (
        <div>
            <header className={styles.headerr}>

                <h3>
                    <span className={styles.Yna}>Yha</span>
                    <span className={styles.nko}>nKo</span>
                </h3>
                <BrowserRouter>
                    <ul className={styles.links}>
                        <li className={styles.listlink}>
                            <Link to="Services" className={styles.ativo} >
                                Serviços
                            </Link>
                        </li>
                        <li className={styles.listalinks}>
                            <Link to="Project" >
                                Projectos recentes
                            </Link>
                        </li>
                        <li className={styles.listalinks}>
                            <Link to="CreateProject">
                                Criar projectos
                            </Link>
                        </li>
                        <li className={styles.listalinks}>
                            <Link to="AboutUs">
                                Sobre nós
                            </Link>
                        </li>
                    </ul>

                    <div className={styles.buttomcontainer}>
                        <button type='submit'>Contatar</button>
                    </div>
                    <Routes>
                        <Route index element="" />
                        <Route path='Project' element={< Project />} />
                        <Route path='CreateProject' element={< CreateProject />} />
                        <Route path='AboutUs' element={< AboutUs />} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div >
    );
}