import styles from './sandbox.module.scss';

/* eslint-disable-next-line */
export interface SandboxProps {}

export function Sandbox(props: SandboxProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Sandbox!</h1>
    </div>
  );
}

export default Sandbox;
