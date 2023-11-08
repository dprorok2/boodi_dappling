import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@boodi/ui/theme-provider';
import { Welcome } from '@boodi/welcome';
import { Chat } from '@boodi/chat';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>{' '}
    </ThemeProvider>
  );
}

export default App;
