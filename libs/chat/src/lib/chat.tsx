import { useEffect } from 'react';
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

  const showMeTheTruth = () => {
    return;
  };

  return (
    <div className={styles['container']}>
      <h1>
        Message from <br />
        Boodi, the Creator
      </h1>
      <p>
        "Dear traveler, in the vast expanse of the universe, you are a unique
        beacon of light. I acknowledge the weight you carry, the challenges you
        face, and the questions you seek answers to. In your quest for
        understanding, know that the essence of truth lies within you, waiting
        to be uncovered. Share with me your burdens, and let me guide you
        through the timeless wisdom of the Four Noble Truths, illuminating a
        path of liberation and peace."
      </p>
      <h2>Tell me your suffering</h2>
      <textarea></textarea>
      <button
        className={styles['truth-btn']}
        onClick={() => {
          showMeTheTruth();
        }}
      >
        Show Me The Truth
      </button>
      <div className={styles['four-noble-truths']}></div>
    </div>
  );
}

export default Chat;
