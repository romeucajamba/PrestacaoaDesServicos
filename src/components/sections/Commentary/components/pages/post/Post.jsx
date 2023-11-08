import styles from './Post.module.css';

import { Comentary } from './comment/Comentary';
import { Avatar } from '../../avatar/Avatar';
import { useState } from 'react';



export function Post({ author, publishedAt, content }) {

    const [comments, setComments] = useState([
        'Poste muito bacana'
    ]);

    const [newCommentText, setNewCommentText] = useState('')

    const publishedAtDateFormatted = new Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',//o dia será por dois dígitos
        month: 'long',//o mês será por extenso,
        hour: '2-digit',//será por dois dígitos
        minute: '2-digit',//será por dois dígitos
    }).format(publishedAt)

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')

    }

    function handleNewComentInvalid() {
        event.target.setCustomValidity('')
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete) {
        //filtrando ou mantendo os comentarios que forem diferentes
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }
    const isNewCommentEmpy = newCommentText.length == 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar hasBorder className={styles.avatar} src={author.avatarUrl} />

                    <div className={styles.authorInfo}>

                        <strong>{author.nome}</strong>
                        <span>{author.role}</span>
                    </div>

                </div>

                <time title="14 de Setembro de 2023 ás 15:32h" dateTime="2023-09-14 15:30:50">{publishedAtDateFormatted}</time>
            </header>

            <div className={styles.content}>

                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href="#" target="_blank">{line.content}</a></p>;
                    }
                })}

            </div>

            <form onSubmit={handleCreateNewComment} className={styles.formComemt}>
                <strong>Deixe seu comentário</strong>

                <textarea
                    name="comment"
                    placeholder='Deixe seu cometário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    //Validadndo formulário
                    onInvalid={handleNewComentInvalid}
                    required
                />

                <button type='submit' disabled={isNewCommentEmpy }>Enviar comentário</button>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comentary
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />)
                })}

            </div>
        </article>

    )
}

