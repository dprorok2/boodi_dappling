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

  const [truthBtnDisabled, setTruthBtnDisabled] = useState(false);
  const [truthBtnText, setTruthBtnText] = useState('Show Me The Truth');

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
    setTruthBtnDisabled(true);
    setTruthBtnTextRandomly();
    try {
      await Promise.all([getFourTruths(), getEightfoldPath()]);
      resetShowMeTheTruthBtn();
    } catch (error) {
      console.error(error);
    }
    resetShowMeTheTruthBtn();
  };

  const setTruthBtnTextRandomly = () => {
    const options = [
      'Seeking Insights...',
      'Channeling Wisdom...',
      'Gathering Light...',
    ];
    const randomIndex = Math.floor(Math.random() * options.length);
    setTruthBtnText(options[randomIndex]);
  };

  const resetShowMeTheTruthBtn = () => {
    setTruthBtnDisabled(false);
    setTruthBtnText('Show Me The Truth');
  };

  const getFourTruths = async () => {
    try {
      const response = await fetch(
        //'http://localhost:5000/four-noble-truths',
        'https://boodi-proxy.replit.app/four-noble-truths',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Origin: window.location.origin,
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
    const domain = 'https://boodi-proxy.replit.app';
    const endpoint = currentUser
      ? '/eightfold-path-full'
      : '/eightfold-path-first-only';

    const url = `${domain}${endpoint}`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Origin: window.location.origin,
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
      {!currentUser && (
        <button
          className={`ghost-btn w-[100px] self-end`}
          onClick={() => {
            signIn();
          }}
        >
          Sign in
        </button>
      )}

      <h1>
        A Message From: <br />
        Boodi, The Enlightened Guide
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

      <h2>Release Your Worries</h2>
      <p className={`${styles['worries-subtext']} max-w-[570px]`}>
        Put down what you’ve been carrying. Unburden your heart. Lighten your
        load. Speak your silence. Tell me - what has been causing you stress?
      </p>
      <textarea
        placeholder="E.g., 'I'm overwhelmed with work and personal life.'"
        value={suffering}
        onChange={(e) => setSuffering(e.target.value)}
      ></textarea>
      <p className="max-w-[570px]">
        <button
          className={`${styles['truth-btn']} primary-btn ${
            truthBtnDisabled ? 'disabled' : ''
          }`}
          onClick={() => showMeTheTruth()}
          disabled={truthBtnDisabled}
        >
          {truthBtnText}
        </button>
      </p>

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
