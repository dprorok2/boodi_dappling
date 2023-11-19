import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from '@boodi/ui/theme-provider';
import { Welcome } from '@boodi/welcome';
import { Chat } from '@boodi/chat';
import Xoxo from './pages/xoxo/xoxo';
import NotFound404 from './pages/not-found-404/not-found-404';

export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/xoxo" element={<Xoxo />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
