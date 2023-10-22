import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useNavigate } from 'react-router-dom';
import styles from './welcome.module.scss';

/* eslint-disable-next-line */
export interface WelcomeProps {}

export function Welcome(props: WelcomeProps) {
  useEffect(() => {
    document.body.classList.add(styles['welcome']);
    document.title = 'Boodi | Exponential Enlightenment';
    return () => {
      document.body.classList.remove(styles['chawelcomet']);
    };
  }, []);

  const [emailInput, setEmailInput] = useState('');
  const [isSubscribedSuccessfully, setIsSubscribedSuccessfully] =
    useState(false);
  const navigate = useNavigate();

  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      insertSubscriber();
    }
  };

  const insertSubscriber = async () => {
    const { data: authenticated, error: authError } =
      await supabase.auth.signInWithPassword({
        email: import.meta.env.VITE_SUPABASE_SUBSCRIBERS_USER,
        password: import.meta.env.VITE_SUPABASE_SUBSCRIBERS_PW,
      });

    if (authError) {
      console.error('Error authenticating with Supabase.');
      return;
    }

    if (authenticated) {
      const browser_name = navigator.userAgent;

      const { data: queryData, error: queryError } = await supabase
        .from('Subscribers')
        .insert({ email: emailInput, browser_name });

      console.log(queryData, queryError);

      if (queryError) {
        console.error(`Database query failed: ${queryError.message}`);
        return;
      } else {
        setIsSubscribedSuccessfully(true);
      }
    }
  };

  const navigateToChat = () => {
    navigate('/chat');
  };

  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        <h1>
          For Innovators: Elevate Your <b />
          Consciousness with Boodi
        </h1>
      </div>
      <div className={styles['content']}>
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
          superpower. Sharpen your mind, realign your body, and be part of the
          <b>transformative shift in consciousness</b> with Boodi.
        </p>
        <p>
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
        <p style={{ textAlign: 'center' }}>
          <img
            className={styles['meditator']}
            src="meditator.png"
            alt="meditator"
          ></img>
        </p>
      </div>
      <div className={styles['footer']}>
        {!isSubscribedSuccessfully && (
          <>
            <p>
              Subscribe for updates on Boodi and get enlightment in your inbox.
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              onKeyDown={(e) => handleKeyDown(e)}
            />
            <button
              className={styles['gimme-btn']}
              onClick={() => {
                insertSubscriber();
              }}
            >
              Gimme That Boodi
            </button>
          </>
        )}
        {isSubscribedSuccessfully && (
          <>
            <p>You are now subscribed to Boodi updates!</p>

            <button
              className={styles['chat-btn']}
              onClick={() => {
                navigateToChat();
              }}
            >
              Chat With Boodi
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Welcome;
