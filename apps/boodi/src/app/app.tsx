// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Welcome } from '@boodi/welcome';
import { BoodiMessage } from './boodiMessage';
import styles from './app.module.scss';

export function App() {
  return (
    <div>
      <Welcome />
      <BoodiMessage />
    </div>
  );
}

export default App;
