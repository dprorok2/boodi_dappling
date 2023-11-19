import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './welcome.module.scss';

/* eslint-disable-next-line */
export interface WelcomeProps {}

export function Welcome(props: WelcomeProps) {
  useEffect(() => {
    document.body.classList.add(styles['welcome']);
    document.title = 'Boodi | Exponential Enlightenment';
    return () => {
      document.body.classList.remove(styles['welcome']);
    };
  }, []);

  const navigate = useNavigate();

  const navigateToChat = async () => {
    navigate('/release-your-worries');
  };

  return (
    <div className={`${styles['container']}`}>
      <div className={`${styles['header']}`}>
        <h1>
          For Innovators: Elevate Your <b />
          Consciousness with Boodi
        </h1>
      </div>
      <div className={`${styles['content']}`}>
        <p className="w-full">
          <button
            className={`${styles['primary-btn']}`}
            onClick={() => {
              navigateToChat();
            }}
          >
            Chat With Boodi
          </button>
        </p>
        <p>
          Are you always on the cutting edge, seeking the next big thing? Look
          no further than the <b>horizon of human potential</b>. The spiritual
          community has already blazed the trail, showcasing the transformative
          potential of <b>elevated consciousness</b>.
        </p>
        <p>
          As an Innovator, you're hard-wired to <b>challenge boundaries</b> and
          dive deep into <b>novel experiences</b>. And that's precisely what the
          Boodi platform offers. Groundbreaking, isn't it? To think that in an
          age where technology reigns supreme, the{' '}
          <b>next frontier is our own consciousness</b>.
        </p>
        <p>
          In an era of unprecedented distractions, staying present is the new
          superpower. Sharpen your mind, realign your body, and be part of the{' '}
          <b>transformative shift in consciousness</b> with Boodi.
        </p>
        <p>
          <img
            className={`${styles['book-lotus']} float-right`}
            src="book-lotus.jpeg"
            alt="book-lotus"
          ></img>
          Imagine tapping into the vast expanse of{' '}
          <b>universal consciousness</b>, a realm once elusive, now accessible.
          Feel your perception widen as you journey through myriad{' '}
          <b>dimensions and perspectives</b>, each more enlightening than the
          last.
        </p>
        <p>
          Join the <b>Boodi platform</b>. Experience the exponential growth of
          your mind as you harmoniously integrate the vastness of universal
          consciousness with your unique essence. Embrace the next evolution,
          today. Because for Innovators like you, <b>the future is now</b>.
        </p>
      </div>
      <div className={`${styles['footer']}`}>
        {' '}
        <p className="w-full">
          <button
            className={`${styles['primary-btn']}`}
            onClick={() => {
              navigateToChat();
            }}
          >
            Release Your Worries
          </button>
        </p>
      </div>
    </div>
  );
}

export default Welcome;
