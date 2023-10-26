import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Welcome } from '@boodi/welcome';
import { Chat } from '@boodi/chat';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  const navigate = useNavigate();

  useEffect(() => {
    replitUrlRewrite();
  }, []);

  const replitUrlRewrite = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const route = searchParams.get('route');

    if (route) navigate(route, { replace: true });
  };

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
