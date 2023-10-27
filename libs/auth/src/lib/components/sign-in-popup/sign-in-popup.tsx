import { useEffect, useState } from 'react';
import styles from './sign-in-popup.module.scss';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

/* eslint-disable-next-line */
export interface SignInPopupProps {
  closePopup: () => void;
  isSignUp: () => void;
}

export function SignInPopup(props: SignInPopupProps) {
  const [isVisiblePopup, setIsVisiblePopup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    return () => {
      setIsVisiblePopup(true);
    };
  }, []);

  const signInWithEmail = async () => {
    props.closePopup();
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });
  };

  const signUpWithEmail = async () => {
    props.closePopup();
    props.isSignUp();
    await supabase.auth.signUp({ email, password });
  };

  return (
    <div className={styles['sign-in-popup']}>
      <div className={`${styles['card']}`}>
        <div className={`${styles['inner-content']}`}>
          <span className={`${styles['close-btn']}`} onClick={props.closePopup}>
            X
          </span>
          <label htmlFor={'email'}>Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              return;
            }}
          />
          <br />
          <label htmlFor={'password'}>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              return;
            }}
          />
        </div>
        <div className={`${styles['footer']} w-full`}>
          <button
            className={`${styles['sign-up-btn']} ghost-btn`}
            onClick={() => {
              signUpWithEmail();
            }}
          >
            Sign Up
          </button>
          <button
            className={`${styles['sign-in-btn']} ghost-btn`}
            onClick={() => {
              signInWithEmail();
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export { supabase };
export default SignInPopup;
