import './global.css';
import styles from './App.module.css';
import { Hedear } from './components/layout/Header';
import { Sidebar } from './components/pages/sidebar/Sidebar';
import { Post } from './components/pages/post/Post';


//Nosso array de objecto com as informações que vamos passar para as propriedades do Post
const posts = [
  {
    id: 1,
    author: {
      avatarUrl: './assets/userimg/avatar.png',
      nome: 'Romeu Cajamba',
      role: 'Web developer',
    },
    content: [
      { type: 'paragraph', content: 'Olá galera!', },
      { type: 'paragraph', content: 'Meu conteudo educativo', },
      { type: 'link', content: 'Desenvolvedor Front-End', },
      { type: 'link', content: 'Desenvolvedor Python' },

    ],
    publishedAt: new Date('2023-09-15 22:35:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: './assets/userimg/avatar.png',
      nome: 'Tomás Cajamba',
      role: 'Front-end developer',
    },
    content: [
      { type: 'paragraph', content: 'Olá galera!', },
      { type: 'paragraph', content: 'Meu conteudo educativo', },
      { type: 'link', content: 'Desenvolvedor Front-End', },
      { type: 'link', content: 'Desenvolvedor Python' },

    ],
    publishedAt: new Date('2023-08-05 22:35:00'),
  },
];


export function App() {
  return (
    <div>
      <Hedear />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {//Nós usamos o map porque retorna algo, ele vai retornar o nosso post
            return (
              <Post
                //Enviando as infromações do author, conteudo e data de publicação para os nosso post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )

}


