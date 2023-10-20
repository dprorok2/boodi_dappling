import { Route, Routes } from 'react-router-dom';
import { Welcome } from '@boodi/welcome';
import { Message } from '@boodi/message';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  );
}

export default App;
