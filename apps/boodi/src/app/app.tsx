import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@boodi/ui/theme-provider';
import { Welcome } from '@boodi/welcome';
import { Chat } from '@boodi/chat';
import Xoxo from './pages/xoxo/xoxo';

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/xoxo" element={<Xoxo />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
