import styles from './Tecnology.module.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Backend } from './tecnologies/backend/Backend';
import { Frontend } from './tecnologies/frontend/Frontend';
import { Database } from './tecnologies/database/Database';
import { Desktop } from './tecnologies/desktop/Desktop';
import { Mobile } from './tecnologies/mobile/Mobile';





export function Tecnology() {
    return (
        <section className={styles.conatainer}>
            <header>
                <div className={styles.tracejado}></div>
                <h2>Tecnologias que usamos</h2>
            </header>
            <div>

                <BrowserRouter>

                    <nav>
                        <li>
                            <Link to="./" className={styles.link}>
                                Back<span>end</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="Frontend" className={styles.link}>
                                Fron<span>tend</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="Database" className={styles.link}>
                                Data<span>bases</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="Desktop" className={styles.link}>
                                Desk<span>top</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="Mobile" className={styles.link}>
                                Mob<span>ile</span>
                            </Link>
                        </li>
                    </nav>
                    <Routes>
                        <Route index element={<Backend />} />
                        <Route path='Frontend' element={<Frontend />} />
                        <Route path='Database' element={<Database />} />
                        <Route path='Desktop' element={<Desktop />} />
                        <Route path='Mobile' element={<Mobile />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </section >
    )
}