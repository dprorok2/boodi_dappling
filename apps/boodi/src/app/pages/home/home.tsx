import { Welcome } from '@boodi/welcome';
import styles from './home.module.scss';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  return <Welcome />;
}

export default Home;
