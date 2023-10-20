import { useState } from 'react';
import styles from './message.module.scss';

/* eslint-disable-next-line */
export interface MessageProps {}

export function Message(props: MessageProps) {
  const [suffering, setSuffering] = useState('');
  const [truths, setTruths] = useState('');
  const [eightfoldPathVisible, setEightfoldPathVisible] = useState(false);

  const handleClick = async () => {
    setTruths(
      'hello. I really love coding. It is very fun. I am glad you are able to breathe.'
    );
    setEightfoldPathVisible(true);

    // const response = await fetch('https://api.example.com/boodi', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ suffering }),
    // });
    // const data = await response.json();
    // setTruths(data.truths);
    // setEightfoldPathVisible(true);
  };

  const handleEightfoldPathClick = () => {
    // Handle the logic for uncovering the Eightfold Path and pricing details here
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ backgroundColor: 'white', width: 500 }}>
        <h1>Message from Boodi, the Creator</h1>
        <p>
          "Dear traveler, in the vast expanse of the universe, you are a unique
          beacon of light. I acknowledge the weight you carry, the challenges
          you face, and the questions you seek answers to. In your quest for
          understanding, know that the essence of truth lies within you, waiting
          to be uncovered. Share with me your burdens, and let me guide you
          through the timeless wisdom of the Four Noble Truths, illuminating a
          path of liberation and peace."
        </p>
        <h1>Share Your Burden</h1>
        <p>Tell me what has been causing you stress.</p>
        <div>
          <textarea
            placeholder="E.g., 'I'm overwhelmed with work and personal life.'"
            value={suffering}
            onChange={(e) => setSuffering(e.target.value)}
          />
        </div>
        <button onClick={handleClick}>Show me the truth</button>
        {truths.length > 0 && (
          <div>
            <h2>Boodi's Truths:</h2>
            <ul>{truths}</ul>
          </div>
        )}
        {eightfoldPathVisible && (
          <div>
            <p>
              Ready to unlock the next level of your journey? Dive deeper with
              the personalized Eightfold Path, crafted uniquely for you.
            </p>
            <button onClick={handleEightfoldPathClick}>
              Uncover my Eightfold Path (with pricing details)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Message;
