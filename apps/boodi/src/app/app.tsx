import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from '@boodi/ui/theme-provider';
import Xoxo from './pages/xoxo/xoxo';
import NotFound404 from './pages/not-found-404/not-found-404';
import WhatsOnYourMind from './pages/whats-on-your-mind/whats-on-your-mind';
import Sandbox from './pages/sandbox/sandbox';
import ReleaseYourWorries from './pages/release-your-worries/release-your-worries';
import Home from './pages/home/home';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/release-your-worries"
            element={<ReleaseYourWorries />}
          />
          <Route path="/whats-on-your-mind" element={<WhatsOnYourMind />} />
          <Route path="/xoxo" element={<Xoxo />} />
          <Route path="/sandbox" element={<Sandbox />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
