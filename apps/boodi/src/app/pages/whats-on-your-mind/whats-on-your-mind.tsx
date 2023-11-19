import styles from './whats-on-your-mind.module.scss';

/* eslint-disable-next-line */
export interface WhatsOnYourMindProps {}

export function WhatsOnYourMind(props: WhatsOnYourMindProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WhatsOnYourMind!</h1>
    </div>
  );
}

export default WhatsOnYourMind;
