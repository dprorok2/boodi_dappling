import { Route, Routes } from 'react-router-dom';
import { Welcome } from '@boodi/welcome';
import { BoodiMessage } from './boodiMessage';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/message" element={<BoodiMessage />} />
    </Routes>
  );
}

export default App;
