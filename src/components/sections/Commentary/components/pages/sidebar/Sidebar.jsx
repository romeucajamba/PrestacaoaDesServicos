import styles from './Sidebar.module.css';
import Cover from '../../../assets/userimg/capa.png';
import { Avatar } from '../../avatar/Avatar';
import MyAvatar from '../../../assets/userimg/avatar.png';

export function Sidebar() {
    return (
        <div>
            <aside className={styles.aside}>
                <img className={styles.cover} src={Cover} />

                <div className={styles.profile}>
                    <Avatar src={MyAvatar}/>
                    <strong>Romeu Cajamba</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="#">Editar seu perfil</a>
                </footer>
            </aside>
        </div>
    )
}