import { Post } from "./Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Post
            author="Pedro Rodrigues"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam perspiciatis cumque suscipit iste, blanditiis, consectetur ea fugit id obcaecati, quidem quasi eligendi tempore reprehenderit quos commodi veniam sapiente explicabo voluptatem!"
          />
          <Post
            author="Outro cara"
            content="Outra assunto"
          />
        </main>
      </div>
    </div>
  )
}