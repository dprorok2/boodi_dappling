import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import DOMPurify from 'dompurify';
import styles from './chat.module.scss';

/* eslint-disable-next-line */
export interface ChatProps {}

export function Chat(props: ChatProps) {
  useEffect(() => {
    document.body.classList.add(styles['chat']);
    document.title = 'Boodi | Chat';

    getUser();

    return () => {
      document.body.classList.remove(styles['chat']);
    };
  }, []);

  const [currentUser, setCurrentuser] = useState<any>(null);
  const [suffering, setSuffering] = useState('');
  const [truths, setTruths] = useState('');
  const [eightfoldPath, setEightfoldPath] = useState('');
  const navigate = useNavigate();

  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  const getUser = async () => {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) return;
    setCurrentuser(user);
    console.log(user);
  };

  const signIn = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: 'https://boodi.ai/chat',
      },
    });
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) window.location.reload();
  };

  const showMeTheTruth = async () => {
    getFourTruths();
    getEightfoldPath();
  };

  const getFourTruths = async () => {
    try {
      const response = await fetch(
        //'http://localhost:5000/four-noble-truths',
        'https://boodi-proxy-AlexCris1.replit.app/four-noble-truths',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ suffering }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setTruths(data.result);
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getEightfoldPath = async () => {
    //const domain = 'http://localhost:5000';
    const domain = 'https://boodi-proxy-AlexCris1.replit.app';
    const endpoint = currentUser
      ? '/eightfold-path-full'
      : '/eightfold-path-first-only';

    const url = `${domain}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ suffering }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setEightfoldPath(data.result);
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div
      className={`${styles['container']} ${currentUser ? '!mt-[4rem]' : ''}`}
    >
      {currentUser && (
        <div className={styles['user-top-bar']}>
          <img src={currentUser.user_metadata.picture} alt="Profile pic"></img>

          <span className={styles['full-name']}>
            {currentUser.user_metadata.full_name}
          </span>
          <br />

          {/* <span className={styles['email']}>
            {currentUser.user_metadata.email}
          </span> */}

          <span className={styles['signout']}>
            <span
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </span>
          </span>
        </div>
      )}
      <h1>
        Message from <br />
        Boodi, the Creator
      </h1>
      <p className={styles['boodi-message']}>
        "Dear traveler, in the vast expanse of the universe, you are a unique
        beacon of light. I acknowledge the weight you carry, the challenges you
        face, and the questions you seek answers to. In your quest for
        understanding, know that the essence of truth lies within you, waiting
        to be uncovered. Share with me your burdens, and let me guide you
        through the timeless wisdom of the Four Noble Truths, illuminating a
        path of liberation and peace."
      </p>
      <p>
        {!currentUser && (
          <button
            className={`${styles['gimme-btn']} primary-btn`}
            onClick={() => {
              signIn();
            }}
          >
            Gimme That Boodi
          </button>
        )}
      </p>
      <h2>Share your burden</h2>
      <p className={styles['burden-subtext']}>
        Tell me what has been causing you stress?
      </p>
      <textarea
        placeholder="E.g., 'I'm overwhelmed with work and personal life.'"
        value={suffering}
        onChange={(e) => setSuffering(e.target.value)}
      ></textarea>
      <button className={styles['truth-btn']} onClick={() => showMeTheTruth()}>
        Show Me The Truth
      </button>

      {truths && eightfoldPath && (
        <>
          <div className={styles['four-noble-truths']}>
            <h2>The Four Noble Truths</h2>
            <div
              className={styles['inner-content']}
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truths) }}
            ></div>
          </div>

          <div className={styles['eightfold-path']}>
            <h2>The Noble Eightfold Path</h2>
            <div
              className={styles['inner-content']}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(eightfoldPath),
              }}
            ></div>
            {!currentUser && (
              <div className={styles['create-free-account']}>
                <p>
                  To access steps 2 &ndash; 8, <br />
                  create a free account.
                </p>
                {/* <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
            /> */}
                <button
                  className={`${styles['gimme-btn']} primary-btn`}
                  onClick={() => {
                    signIn();
                  }}
                >
                  Gimme That Boodi
                </button>
              </div>
            )}
          </div>
        </>
      )}

      <div className={styles['footer-links']}>
        <a href="https://paypal.me/djprorok" target="_blank">
          Donate
        </a>
        <a
          href="https://calendly.com/davidprorok/clarity-session-for-innovators"
          target="_blank"
        >
          Find a coach
        </a>
      </div>
    </div>
  );
}

export default Chat;
