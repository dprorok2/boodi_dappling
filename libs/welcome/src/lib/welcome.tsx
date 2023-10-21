import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import styles from './welcome.module.scss';

/* eslint-disable-next-line */
export interface WelcomeProps {}

export function Welcome(props: WelcomeProps) {
  const [email, setEmail] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
  );

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
        .insert({ email, browser_name });

      if (queryError) {
        console.error(`Database query failed: ${queryError.message}`);
        return;
      }

      if (queryData) {
        setEmail(queryData);
        console.log('Query data', queryData);
      }
    }
  };

  return (
    <div className={styles['container']}>
      <h1>
        For Innovators:
        <br />
        Elevate Your Consciousness with <span className="boodi">Boodi</span>
      </h1>
      <p>
        Are you always on the cutting edge, seeking the next big thing? Look no
        further than the horizon of human potential. The spiritual community has
        already blazed the trail, showcasing the transformative potential of
        elevated consciousness.
      </p>
      <p>
        As an Innovator, you're hard-wired to challenge boundaries and dive deep
        into novel experiences. And that's precisely what the Boodi platform
        offers. Groundbreaking, isn't it? To think that in an age where
        technology reigns supreme, the next frontier is our own consciousness.
      </p>
      <p>
        In an era of unprecedented distractions, staying present is the new
        superpower. Sharpen your mind, realign your body, and be part of the
        transformative shift in consciousness with Boodi.
      </p>
      <p>
        Imagine: Tapping into the vast expanse of universal consciousness, a
        realm once elusive, now accessible. Feel your perception widen as you
        journey through myriad dimensions and perspectives, each more
        enlightening than the last.
      </p>
      <p>
        Join the Boodi platform. Experience the exponential growth of your mind
        as you harmoniously integrate the vastness of universal consciousness
        with your unique essence. Embrace the next evolution, today. Because for
        Innovators like you, the future is now.
      </p>

      {!isButtonClicked && (
        <>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={styles['gimme-btn']}
            onClick={() => {
              setIsButtonClicked(true);
              insertSubscriber();
            }}
          >
            Gimme That Boodi
          </button>
        </>
      )}
    </div>
  );
}

export default Welcome;
