import { Route, Routes } from 'react-router-dom';
import { Welcome } from '@boodi/welcome';
import { Chat } from '@boodi/chat';
import { Message } from '@boodi/message';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/message" element={<Message />} />
    </Routes>
  );
}

export default App;
