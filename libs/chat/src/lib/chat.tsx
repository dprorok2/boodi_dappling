import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import styles from './chat.module.scss';

/* eslint-disable-next-line */
export interface ChatProps {}

export function Chat(props: ChatProps) {
  useEffect(() => {
    document.body.classList.add(styles['chat']);
    document.title = 'Boodi | Chat';

    return () => {
      document.body.classList.remove(styles['chat']);
    };
  }, []);

  const [suffering, setSuffering] = useState('');
  const [truths, setTruths] = useState('');
  const [eightfoldPath, setEightfoldPath] = useState('');

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

  const getEightfoldPath = async (fullPath = false) => {
    try {
      const response = await fetch(
        //'http://localhost:5000/eightfold-path',
        'https://boodi-proxy-AlexCris1.replit.app/eightfold-path',
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
        setEightfoldPath(data.result);
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className={styles['container']}>
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
          </div>

          <div className={styles['create-account']}>
            <div className={styles['inner-content']}>
              <div className={styles['create-free-account']}>
                <p>
                  To access steps 2 &ndash; 8, <br />
                  create a free account.
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      <div className={styles['footer-links']}>
        <a href="https://paypal.me/djprorok">Donate</a>
        <a href="https://calendly.com/davidprorok/clarity-session-for-innovators">
          Find a coach
        </a>
      </div>
    </div>
  );
}

export default Chat;
