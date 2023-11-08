import { Route, Link, Routes } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@boodi/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@boodi/ui/dropdown-menu';
import { Textarea } from '@boodi/ui/textarea';
import { useTheme } from '@boodi/ui/theme-provider';

import styles from './xoxo.module.scss';

/* eslint-disable-next-line */
export interface XoxoProps {}

export function Xoxo(props: XoxoProps) {
  const { setTheme } = useTheme();

  return (
    <div className={styles['container']}>
      <h1>💋 x0Xo 🤗</h1>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme('light')}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Textarea />

      <ul>
        <li>
          <Link to="/">xoxo root</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<div>This is the xoxo root route.</div>} />
      </Routes>
    </div>
  );
}

export default Xoxo;
