/** Styles of the pages */
import './styles/global/global.css';
import styles from '../src/styles/styles_component/App.module.css';
/** Our routes */


/** Our pages or componentes imported */
import { Header } from './components/header/Header';
import { Ferstsection } from './components/sections/Section';
import { Objective } from './components/sections/objective/Objective';
import { Solutions } from './components/sections/solutions/Solutions';
import { Services } from './components/sections/services/Services';
import { Project } from './components/sections/project/Project';
import { Tecnology } from './components/sections/tecnologies/Tecnology';
import { Design } from './components/sections/design/Design';
import { Members } from './components/sections/memmbers/Members';
import { Comment } from './components/sections/comment/Comment';
import { Footer } from './components/footer/Footer';

export function App() {


  return (
    <div>

      < Header />
      <div className={styles.wrapper}>
        <main>
          <Ferstsection />
          <Objective />
          <Solutions />
          <Services />
          <Project />
          <Design />
          <Tecnology />
          <Members />
          <Comment />
        </main>

      </div>
      <Footer />

    </div>
  )
}


