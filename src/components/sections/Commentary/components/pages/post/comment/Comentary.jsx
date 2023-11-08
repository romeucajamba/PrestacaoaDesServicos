import styles from './Comentary.module.css';
import Ango from '../../../../assets/userimg/capa.png';
import { Avatar } from '../../../avatar/Avatar';
import { useState } from 'react';

export function Comentary({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)

    function hadleDeleteComment() {

        onDeleteComment(content)
    }

    function handleLinkComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>

            <Avatar hasBorder={false} src={Ango} />

            <div className={styles.comentBox}>
                <div className={styles.comentContent}>
                    <header>

                        <div className={styles.authorTime}>
                            <strong>Romeu Cajamab</strong>
                            <time title="14 de Setembro de 2023 ás 15:32h" dateTime="2023-09-14 15:30:50">há 30mint</time>
                        </div>

                        <button onClick={hadleDeleteComment} title='Apagar'>Eliminar</button>

                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLinkComment}>
                        Like <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>

    )
}